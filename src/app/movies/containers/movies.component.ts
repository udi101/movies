import {Component, OnInit} from '@angular/core';
import {MovieService} from '../services/movie.service';
import {Movie} from '../interfaces/movie.interface';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers';

import * as MovieSelectors from './../store/movie.selectors';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies$: Observable<Movie[]> = new Observable<Movie[]>();
  filterExpression$: Observable<string> = new Observable<string>();

  constructor(private movieService: MovieService, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.movies$ = this.store.select(MovieSelectors.getAllMovies);
    this.filterExpression$ = this.store.select(MovieSelectors.getFilterExpression);

  }

}
