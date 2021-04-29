import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MoviesComponent} from './containers/movies.component';
import {MovieResolver} from './movie.gueard';

const routes: Routes = [
  {path: '', component: MoviesComponent, pathMatch: 'full', resolve: {movies: MovieResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {

  static components = [MoviesComponent];
}

