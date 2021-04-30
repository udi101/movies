import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

import {Movie} from '../../interfaces/movie.interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public movie$: Observable<Movie>, private dialog: MatDialogRef<MovieComponent>) {
  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialog.close();
  }
}
