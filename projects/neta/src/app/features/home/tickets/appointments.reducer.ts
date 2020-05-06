import { AppointmentsState } from './appointments.model';
import {
  actionStockMarketRetrieve,
  actionStockMarketRetrieveError,
  actionStockMarketRetrieveSuccess
} from './appointments.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: AppointmentsState = {
  symbol: 'GOOGL',
  loading: false,
  tickets: []
};

const reducer = createReducer(
  initialState,
  on(actionStockMarketRetrieve, (state, { symbol }) => ({
    ...state,
    loading: true,
    stock: null,
    error: null,
    symbol
  })),
  on(actionStockMarketRetrieveSuccess, (state, { stock }) => ({
    ...state,
    loading: false,
    stock,
    // tickets: stock,
    error: null
  })),
  on(actionStockMarketRetrieveError, (state, { error }) => ({
    ...state,
    loading: false,
    stock: null,
    error
  }))
);

export function stockMarketReducer(
  state: AppointmentsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
