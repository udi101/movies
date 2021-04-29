import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import {MoviesRoutingModule} from './movies-routing.module';
import {MoviesComponent} from './containers/movies.component';
import {MovieCardComponent} from './components/movie-card/movie-card.component';
import {MoviesListComponent} from './components/movies-list/movies-list.component';
import {StoreModule} from '@ngrx/store';
import {movieReducer} from './store/movie.reducer';
import {EffectsModule} from '@ngrx/effects';
import {MovieEffects} from './store/movie.effects';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';

@NgModule({
  declarations: [MoviesComponent, MovieCardComponent, MoviesListComponent, MovieSearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    MoviesRoutingModule,
    StoreModule.forFeature('movies', movieReducer),
    EffectsModule.forFeature([MovieEffects])
  ]
})
export class MoviesModule {
}
