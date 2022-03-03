export interface Genre {
  name: string;
}

export interface Movie {
  id: string;
  name?: string;
  overview?: string;
  releaseDate?: string;
  poster: {
    large: string;
  };
  genres: Genre[];
}
