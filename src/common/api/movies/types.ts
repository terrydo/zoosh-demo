export interface MovieResult {
  id: string;
  name?: string;
  overview?: string;
  releaseDate?: string;
  poster: {
    large: string;
  };
  genres: {
    name: string;
  }[];
}

export interface SearchMovieResult {
  searchMovies: MovieResult[];
}

export interface GetMovieResult {
  movie: MovieResult;
}

export interface SearchMovieRequest {
  query: string;
}

export interface GetMovieRequest {
  id: string;
}
