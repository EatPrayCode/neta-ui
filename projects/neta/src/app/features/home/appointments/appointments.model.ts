import { HttpErrorResponse } from '@angular/common/http';

export interface Appointment {
  symbol: string;
  exchange: string;
  last: string;
  ccy: string;
  change: string;
  changePositive: boolean;
  changeNegative: boolean;
  changePercent: string;
}

export interface AppointmentsState {
  symbol: string;
  loading: boolean;
  stock?: Appointment;
  error?: HttpErrorResponse;
  tickets?: [];
}
