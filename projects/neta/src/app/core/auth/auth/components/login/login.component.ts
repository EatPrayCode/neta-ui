import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  authLogin,
  authLogout
} from '../../../../core.module';

import { FormGroup } from '@angular/forms';

@Component({
  selector: 'neta-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor(private store: Store) { }

  // loginForm = new FormGroup({});

  ngOnInit() { }

  submit() {
    // this.submitted.emit();
  }

  onLogin() {
    this.store.dispatch(authLogin());
  }

  onLoginClick() {
    this.store.dispatch(authLogin());
  }

  onLogoutClick() {
    this.store.dispatch(authLogout());
  }

}
