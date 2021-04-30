import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieSearchComponent implements OnInit {

  @Output() onFilterChanged = new EventEmitter<string>();
  frmFilter: FormGroup = {} as FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.frmFilter = this.formBuilder.group({
      filter: ''
    });

    this.frmFilter.get('filter')?.valueChanges
      .pipe(debounceTime(500))
      .subscribe(filter => this.onFilterChanged.emit(filter));
  }
}

