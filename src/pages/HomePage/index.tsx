import React, { useCallback, useEffect, useMemo, useState } from 'react';
import SearchBox from 'src/pages/HomePage/components/SearchBox';
import { useLazyQuery } from '@apollo/client';
import {
  fromGqlToMovies,
  SearchMovieRequest,
  SearchMovieResult,
} from 'src/common/api/movies';
import { MovieList } from '../../common/components/MovieList';
import { Skeleton } from '@mui/material';
import debounce from 'lodash/debounce';
import { searchMoviesGQL } from 'src/common/api/movies';
import AppHeading from 'src/common/components/AppHeading';

const MAX_MOVIES_DISPLAY = 8;

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [loadMovies, { loading, data: moviesData }] = useLazyQuery<
    SearchMovieResult,
    SearchMovieRequest
  >(searchMoviesGQL, {
    variables: { query: searchQuery },
  });

  const movies = useMemo(() => {
    if (!moviesData) return [];

    const clonedMovies = [...moviesData.searchMovies];
    return clonedMovies.length <= MAX_MOVIES_DISPLAY
      ? fromGqlToMovies(moviesData.searchMovies)
      : fromGqlToMovies(clonedMovies.splice(0, MAX_MOVIES_DISPLAY));
  }, [moviesData]);

  useEffect(() => {
    if (!searchQuery) return;

    debounceSearch();
  }, [searchQuery]);

  const debounceSearch = useCallback(
    debounce(() => {
      loadMovies();
    }, 800),
    []
  );

  return (
    <div className="h-full">
      <div className="text-center">
        <AppHeading level={1}>Type here to search for movies</AppHeading>

        <SearchBox
          className="mt-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="mt-5">
        {loading ? (
          <Skeleton variant="rectangular" height={300} />
        ) : (
          <MovieList movies={movies} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
