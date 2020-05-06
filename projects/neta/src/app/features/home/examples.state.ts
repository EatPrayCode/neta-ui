import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { AppState } from '../../core/core.module';

import { stockMarketReducer } from './tickets/appointments.reducer';
import { AppointmentsState } from './tickets/appointments.model';

export const FEATURE_NAME = 'home';
export const selectExamples = createFeatureSelector<State, ExamplesState>(
  FEATURE_NAME
);
export const reducers: ActionReducerMap<ExamplesState> = {
  stocks: stockMarketReducer
};

export interface ExamplesState {
  stocks: AppointmentsState;
}

export interface State extends AppState {
  home: ExamplesState;
}
