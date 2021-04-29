import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../interfaces/movie.interface';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input('movie') movie: Movie = {} as Movie;

  constructor() {
  }

  ngOnInit(): void {
  }

}
