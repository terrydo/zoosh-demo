import { gql } from '@apollo/client';

// ? To do: Use GraphQL Fragment to reduce duplication code
export const searchMoviesGQL = gql`
  query SearchMovies($query: String!) {
    searchMovies(query: $query) {
      id
      name
      overview
      releaseDate
      genres {
        name
      }
      poster {
        large
      }
    }
  }
`;

// ? To do: Use GraphQL Fragment to reduce duplication code
export const getMovieByIdGQL = gql`
  query SearchMovies($id: ID!) {
    movie(id: $id) {
      id
      name
      overview
      releaseDate
      genres {
        name
      }
      poster {
        large
      }
    }
  }
`;

// ? To do: Use GraphQL Fragment to reduce duplication code
export const discoverMoviesGQL = gql`
  query DiscoverMovies($genre: [ID!]) {
    discoverMovies(filter: { withGenres: { include: $genre } }) {
      id
      name
      overview
      releaseDate
      poster {
        large
      }
    }
  }
`;
