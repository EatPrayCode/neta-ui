import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, debounceTime, map, switchMap, tap } from 'rxjs/operators';

import { LocalStorageService } from '../../../core/core.module';

import {
  actionStockMarketRetrieve,
  actionStockMarketRetrieveError,
  actionStockMarketRetrieveSuccess
} from './appointments.actions';
import { AppointmentsService } from './appointments.service';

export const STOCK_MARKET_KEY = 'EXAMPLES.STOCKS';

@Injectable()
export class TicketsEffects {
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
    private service: AppointmentsService
  ) {}

  retrieveStock = createEffect(() => ({ debounce = 500 } = {}) =>
    this.actions$.pipe(
      ofType(actionStockMarketRetrieve),
      tap(action =>
        this.localStorageService.setItem(STOCK_MARKET_KEY, {
          symbol: action.symbol
        })
      ),
      debounceTime(debounce),
      switchMap(action =>
        this.service.retrieveStock(action.symbol).pipe(
          tap(s=>{
            console.log(s);
          }),
          map(stock => actionStockMarketRetrieveSuccess({ stock })),
          catchError(error => of(actionStockMarketRetrieveError({ error })))
        )
      )
    )
  );
}
