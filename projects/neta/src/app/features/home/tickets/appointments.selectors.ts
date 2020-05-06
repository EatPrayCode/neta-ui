import { createSelector } from '@ngrx/store';

import { ExamplesState, selectExamples } from '../examples.state';

export const selectAppointments = createSelector(
  selectExamples,
  (state: ExamplesState) => state.stocks
);
