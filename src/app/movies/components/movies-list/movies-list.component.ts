import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../interfaces/movie.interface';


@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent implements OnInit {
  @Input('movies') movies: Movie[] = [];

  @Input('filter') set filter(value: string) {
    this.filterExpression = value;

  }

  filterExpression = '';
  filteredMovieList: Movie[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.filterMovies('m');
  }

  filterMovies(filter: string): void {
    this.filteredMovieList = this.movies.filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase()));
  }
}
