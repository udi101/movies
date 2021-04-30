import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {MovieActions} from './action-types';
import {map, switchMap} from 'rxjs/operators';
import {MovieService} from '../services/movie.service';

@Injectable({providedIn: 'root'})
export class MovieEffects {

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadAllMovies),
      switchMap(action => this.movieService.getMovies()),
      map(movies => MovieActions.loadAllMoviesSuccess({movies}))
    ));

  loadMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadMovie),
      switchMap(action => this.movieService.getMovie(action.movieId)),
      map(movie => MovieActions.loadMovieSuccess({movie}))
      ));


  constructor(private actions$: Actions, private movieService: MovieService) {
  }
}
