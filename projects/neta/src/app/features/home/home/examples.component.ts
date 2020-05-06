import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import {
  routeAnimations,
  selectIsAuthenticated
} from '../../../core/core.module';

import { State } from '../examples.state';

@Component({
  selector: 'neta-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  examples = [
    // { link: 'todos', label: 'neta.examples.menu.todos' },
    { link: 'tickets', label: 'neta.examples.menu.tickets' },
    // { link: 'theming', label: 'neta.examples.menu.theming' },
    // { link: 'crud', label: 'neta.examples.menu.crud' },
    // {
    //   link: 'simple-state-management',
    //   label: 'neta.examples.menu.simple-state-management'
    // },
    // { link: 'form', label: 'neta.examples.menu.form' },
    // { link: 'notifications', label: 'neta.examples.menu.notifications' },
    // { link: 'elements', label: 'neta.examples.menu.elements' },
    // { link: 'authenticated', label: 'neta.examples.menu.auth', auth: true }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
