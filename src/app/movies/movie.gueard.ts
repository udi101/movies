import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AppState} from '../reducers';
import {select, Store} from '@ngrx/store';
import * as MovieSelectors from './store/movie.selectors';
import {filter, map, take, tap} from 'rxjs/operators';
import {MovieActions} from './store/action-types';


@Injectable({providedIn: 'root'})
export class MovieResolver implements Resolve<boolean> {

  constructor(private store: Store<AppState>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store.pipe(
      select(MovieSelectors.allMoviesLoaded),
      tap((moviesLoaded) => {
        console.log(moviesLoaded);
        if (!moviesLoaded) {
        this.store.dispatch(MovieActions.loadAllMovies());
        }
      }),
      filter(moviesLoaded => !!moviesLoaded),
      take(1)
    );
  }
}
