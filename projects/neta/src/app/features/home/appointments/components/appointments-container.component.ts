import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/core.module';

import { selectAppointments } from '../appointments.selectors';
import { actionStockMarketRetrieve } from '../appointments.actions';
import { AppointmentsState } from '../appointments.model';
import { State } from '../../home.state';
import { Feature, features } from './feature-list.data';

@Component({
  selector: 'neta-tickets',
  templateUrl: './appointments-container.component.html',
  styleUrls: ['./appointments-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppointmentsContainerComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  tickets$: Observable<AppointmentsState>;
  features: Feature[] = features;

  constructor(public store: Store<State>) {}

  ngOnInit() {
    this.tickets$ = this.store.pipe(select(selectAppointments));
    this.tickets$
      .pipe(take(1))
      .subscribe(stocks => this.onSymbolChange(stocks.symbol));
  }

  onSymbolChange(symbol: string) {
    this.store.dispatch(actionStockMarketRetrieve({ symbol }));
  }
}
