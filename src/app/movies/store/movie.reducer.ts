import {Movie} from '../interfaces/movie.interface';
import {createReducer, on} from '@ngrx/store';
import {MovieActions} from './action-types';

export interface MovieState {
  allMovies: Movie[];
  filterExpression: string;
  currentMovie: Movie;
  allMoviesLoaded: boolean;
}

export const initialState: MovieState = {
  allMovies: [],
  filterExpression: '',
  currentMovie: {} as Movie,
  allMoviesLoaded: false
};


export const movieReducer = createReducer(
  initialState,
  on(MovieActions.loadAllMoviesSuccess,
    (state, action) => ({...state, allMovies: [...action.movies], allMoviesLoaded: true})
  )
);
