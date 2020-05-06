import { createSelector } from '@ngrx/store';

import { HomeState, selectHome } from '../home.state';

export const selectAppointments = createSelector(
  selectHome,
  (state: HomeState) => state.home
);
