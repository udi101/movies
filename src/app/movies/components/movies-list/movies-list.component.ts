import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from '../../interfaces/movie.interface';


@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent implements OnInit {
  movieList: Movie[] = [];

  @Input('movies') set movies(value: Movie[] | null) {
    this.movieList = !value ? [] : value;
  }

  @Input('filter') set filter(value: string | null) {
    this.filterExpression = !value ? '' : value;
    this.filterMovies(this.filterExpression);
  }

  @Output() onMovieClicked = new EventEmitter<Movie>();

  filterExpression = '';
  filteredMovieList = new Array<Movie>();

  constructor() {
  }

  ngOnInit(): void {
  }

  filterMovies(filter: string): void {
    this.filteredMovieList = this.movieList.filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase()));
  }

  movieClicked(movie: Movie): void {
    this.onMovieClicked.emit(movie);
  }
}
