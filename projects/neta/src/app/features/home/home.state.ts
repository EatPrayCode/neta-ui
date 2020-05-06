import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { AppState } from '../../core/core.module';

import { stockMarketReducer } from './appointments/appointments.reducer';
import { AppointmentsState } from './appointments/appointments.model';

export const FEATURE_NAME = 'home';
export const selectHome = createFeatureSelector<State, HomeState>(
  FEATURE_NAME
);
export const reducers: ActionReducerMap<HomeState> = {
  home: stockMarketReducer
};

export interface HomeState {
  home: AppointmentsState;
}

export interface State extends AppState {
  home: HomeState;
}
