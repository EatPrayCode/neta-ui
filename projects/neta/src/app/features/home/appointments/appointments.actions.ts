import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { Appointment } from './appointments.model';

export const actionStockMarketRetrieve = createAction(
  '[Stock] Retrieve',
  props<{ symbol: string }>()
);

export const actionStockMarketRetrieveSuccess = createAction(
  '[Stock] Retrieve Success',
  props<{ stock: Appointment }>()
);

export const actionStockMarketRetrieveError = createAction(
  '[Stock] Retrieve Error',
  props<{ error: HttpErrorResponse }>()
);
