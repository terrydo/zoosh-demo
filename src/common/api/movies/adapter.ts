import { Movie } from 'src/common/models/Movie';
import { MovieResult } from './types';

export const fromGqlToMovies = (data: MovieResult[]): Movie[] => {
  return [...data];
};
