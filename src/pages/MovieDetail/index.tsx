import { useQuery, useLazyQuery } from '@apollo/client';
import { Skeleton } from '@mui/material';
import React, { useState, useEffect } from 'react';
import {
  discoverMoviesGQL,
  fromGqlToMovies,
  getMovieByIdGQL,
  GetMovieRequest,
  GetMovieResult,
} from 'src/common/api/movies';
import AppHeading from 'src/common/components/AppHeading';
import { useParams } from 'react-named-router';
import { MovieSocialInfo } from 'src/common/models/MovieSocialInfo';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {
  fromDuckDuckGoApi,
  getMovieSocialByName,
} from 'src/common/api/movieSocialInfo';
import { MovieList } from 'src/common/components/MovieList';

interface MovieDetailPageParams {
  [key: string]: string;
  id: string;
}

const MovieDetail: React.FC = () => {
  const { id } = useParams<MovieDetailPageParams>();

  const { data: movieData, loading: movieLoading } = useQuery<
    GetMovieResult,
    GetMovieRequest
  >(getMovieByIdGQL, {
    variables: {
      id,
    },
  });

  const [
    getRelatedMovies,
    { data: relatedMoviesData, loading: relatedMoviesLoading },
  ] = useLazyQuery(discoverMoviesGQL, {
    variables: {
      genres: [movieData?.movie.genres],
    },
  });

  const [movieSocialInfo, setMovieSocialInfo] = useState<MovieSocialInfo>();

  useEffect(() => {
    setMovieSocialInfo(undefined);

    (async function fetchImdbAndWiki() {
      if (!movieData) return;

      const { movie } = movieData;

      if (!movie.name) return;

      const [{ data: movieSocialData }] = await Promise.all([
        getMovieSocialByName(movie.name),
        getRelatedMovies(),
      ]);

      setMovieSocialInfo(fromDuckDuckGoApi(movieSocialData));
    })();
  }, [movieData]);

  if (movieLoading || relatedMoviesLoading || !movieData || !relatedMoviesData)
    return <Skeleton variant="rectangular" height={100} />;

  const { movie } = movieData;
  const discoverMovies = fromGqlToMovies(relatedMoviesData.discoverMovies);

  return (
    <div className="h-full">
      <AppHeading level="1">{movie.name}</AppHeading>

      <div className="flex items-start gap-x-10">
        <img src={movie.poster.large} className="mt-4" />

        <div className="flex-grow">
          {movieSocialInfo ? (
            <>
              <div>{movieSocialInfo?.summary}</div>

              <div className="mt-2">
                <a
                  href={movieSocialInfo?.imdbLink ?? '#'}
                  className="inline-block mr-5 transition-colors hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Imdb
                  <OpenInNewIcon />
                </a>

                <a
                  className="inline-block transition-colors hover:text-primary"
                  href={movieSocialInfo?.wikiLink ?? '#'}
                  target="_blank"
                  rel="noreferrer"
                >
                  Wikipedia
                  <OpenInNewIcon />
                </a>
              </div>
            </>
          ) : (
            <Skeleton variant="rectangular" height={200} />
          )}
        </div>
      </div>

      <AppHeading level="1" className="mt-12">
        Related movies
      </AppHeading>

      {relatedMoviesData && (
        <MovieList className="mt-5" movies={discoverMovies} />
      )}
    </div>
  );
};

export default MovieDetail;
