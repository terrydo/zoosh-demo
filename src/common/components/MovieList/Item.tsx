import React from 'react';
import { Movie } from 'src/common/models/Movie';
import { slugify } from 'src/common/utils/url';
import AppHeading from 'src/common/components/AppHeading';
import { NamedLink } from 'react-named-router';
import { truncate } from 'lodash';
export interface MovieListItemProps {
  movie: Movie;
}

const MovieListItem = ({ movie }: MovieListItemProps) => {
  return (
    <div>
      <NamedLink
        to="MovieDetail"
        params={{
          id: movie.id,
          slug: slugify(movie.name ?? ''),
        }}
        className="block"
      >
        <AppHeading>{movie.name}</AppHeading>
      </NamedLink>

      <img src={movie.poster?.large} className="mt-3" />

      <div className="mt-4">
        {truncate(movie.overview, {
          length: 100,
        })}
      </div>
    </div>
  );
};

export default MovieListItem;
