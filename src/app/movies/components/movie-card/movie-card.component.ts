import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from '../../interfaces/movie.interface';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent implements OnInit {
  @Input('movie') movie: Movie = {} as Movie;
  @Output() onMovieClicked = new EventEmitter<Movie>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
