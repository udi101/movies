import {createAction, props} from '@ngrx/store';
import {Movie} from '../interfaces/movie.interface';

export const loadAllMovies = createAction(
  '[Movie Resolver] Load All Movies');

export const loadAllMoviesSuccess = createAction(
  '[Movies Effects] Load All Movies Success',
  props<{ movies: Movie[] }>()
);


export const loadMovie = createAction(
  '[Movie List] Load Movie',
  props<{ movieId: string }>()
);

export const loadMovieSuccess = createAction(
  '[Movies Effects] Load Movie Success',
  props<{ movie: Movie }>()
);

export const updateFilterExpression = createAction(
  '[Filter Input] Update Filter Expression',
  props<{ filterExpression: string }>()
);
