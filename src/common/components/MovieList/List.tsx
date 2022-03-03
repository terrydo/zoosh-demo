import React from 'react';
import { Movie } from 'src/common/models/Movie';
import { mergeStrings } from 'src/common/utils/string';
import MovieListItem from './Item';

export interface MovieListProps extends React.HTMLAttributes<HTMLDivElement> {
  movies?: Movie[];
}

const MovieList = (_props: MovieListProps) => {
  const { movies, className, ...props } = _props;

  return (
    <div
      {...props}
      className={mergeStrings('grid gap-6 grid-cols-4', className)}
    >
      {movies ? (
        movies.map((movie) => <MovieListItem movie={movie} key={movie.id} />)
      ) : (
        <div>No movies found.</div>
      )}
    </div>
  );
};

export default MovieList;
