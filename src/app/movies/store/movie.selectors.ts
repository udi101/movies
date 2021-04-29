import {createFeatureSelector, createSelector} from '@ngrx/store';
import {MovieState} from './movie.reducer';
import {Movie} from '../interfaces/movie.interface';

export const selectMovieState = createFeatureSelector<MovieState>('movies');

export const getAllMovies = createSelector(
  selectMovieState,
  (state: MovieState): Movie[] => state.allMovies
);

export const getFilterExpression = createSelector(
  selectMovieState,
  (state: MovieState): string => state.filterExpression
);


export const getCurrentMovie = createSelector(
  selectMovieState,
  (state: MovieState): Movie => state.currentMovie
);

export const allMoviesLoaded = createSelector(
  selectMovieState,
  (state: MovieState): boolean => state.allMoviesLoaded
);
