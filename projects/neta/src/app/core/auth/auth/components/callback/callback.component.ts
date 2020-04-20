import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { authLoginComplete } from './../../../../core.module';

import { Store } from '@ngrx/store';

@Component({
  selector: 'neta-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CallbackComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(authLoginComplete());
  }

}
