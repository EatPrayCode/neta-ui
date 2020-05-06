import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/core.module';

import { selectAppointments } from '../appointments.selectors';
import { actionStockMarketRetrieve } from '../appointments.actions';
import { AppointmentsState } from '../appointments.model';
import { State } from '../../examples.state';
import { Feature, features } from './feature-list.data';

@Component({
  selector: 'neta-tickets',
  templateUrl: './tickets-container.component.html',
  styleUrls: ['./tickets-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketsContainerComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  stocks$: Observable<AppointmentsState>;
  features: Feature[] = features;

  constructor(public store: Store<State>) {}

  ngOnInit() {
    this.stocks$ = this.store.pipe(select(selectAppointments));
    this.stocks$
      .pipe(take(1))
      .subscribe(stocks => this.onSymbolChange(stocks.symbol));
  }

  onSymbolChange(symbol: string) {
    this.store.dispatch(actionStockMarketRetrieve({ symbol }));
  }
}
