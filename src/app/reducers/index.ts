import {ActionReducerMap, createReducer} from '@ngrx/store';

// tslint:disable-next-line:no-empty-interface
export interface AppState {
}


export const initialState: AppState = {};

export const appReducer = createReducer(initialState);

export const reducers: ActionReducerMap<AppState> = {
};

