import {Component, OnInit} from '@angular/core';
import {MovieService} from '../services/movie.service';
import {Movie} from '../interfaces/movie.interface';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers';

import * as MovieSelectors from './../store/movie.selectors';
import {MovieActions} from '../store/action-types';
import {MatDialog} from '@angular/material/dialog';
import {MovieComponent} from '../dialogs/movie/movie.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies$: Observable<Movie[]> = new Observable<Movie[]>();
  filterExpression$: Observable<string> = new Observable<string>();
  currentMovie$: Observable<Movie> = new Observable<Movie>();

  constructor(private movieService: MovieService, private store: Store<AppState>, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.movies$ = this.store.select(MovieSelectors.getAllMovies);
    this.filterExpression$ = this.store.select(MovieSelectors.getFilterExpression);
    this.currentMovie$ = this.store.select(MovieSelectors.getCurrentMovie);

  }

  filterChanged(filterExpression: string): void {
    this.store.dispatch(MovieActions.updateFilterExpression({filterExpression}));
  }

  movieClicked(movie: Movie): void {
    const movieId: string = movie.id;
    this.store.dispatch(MovieActions.loadMovie({movieId}));
    this.dialog.open(MovieComponent, {data: this.currentMovie$}).afterClosed()
      .subscribe(() => this.store.dispatch(MovieActions.clearCurrentMovie()));
  }
}
