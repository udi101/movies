import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

import {SharedModule} from '../shared/shared.module';
import {MoviesRoutingModule} from './movies-routing.module';
import {MoviesComponent} from './containers/movies.component';
import {MovieCardComponent} from './components/movie-card/movie-card.component';
import {MoviesListComponent} from './components/movies-list/movies-list.component';
import {StoreModule} from '@ngrx/store';
import {movieReducer} from './store/movie.reducer';
import {EffectsModule} from '@ngrx/effects';
import {MovieEffects} from './store/movie.effects';
import {MovieSearchComponent} from './components/movie-search/movie-search.component';
import { MovieComponent } from './dialogs/movie/movie.component';

@NgModule({
  declarations: [MoviesComponent, MovieCardComponent, MoviesListComponent, MovieSearchComponent, MovieComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MoviesRoutingModule,
    StoreModule.forFeature('movies', movieReducer),
    EffectsModule.forFeature([MovieEffects])
  ]
})
export class MoviesModule {
}
