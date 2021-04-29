import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {debounce} from 'rxjs/operators';

@Component({
  selector: 'movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieSearchComponent implements OnInit {

  @Output() onFilterChanged = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }


  filterChanged(filter: string): void {
    console.log(filter);
    this.onFilterChanged.emit(filter);
  }
}
