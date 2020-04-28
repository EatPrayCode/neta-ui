import { StockMarketState } from './stock-market.model';
import {
  actionStockMarketRetrieve,
  actionStockMarketRetrieveError,
  actionStockMarketRetrieveSuccess
} from './stock-market.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: StockMarketState = {
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
  state: StockMarketState | undefined,
  action: Action
) {
  return reducer(state, action);
}
