import { Injectable } from '@angular/core';
import { bindNodeCallback } from 'rxjs';
import * as auth0 from 'auth0-js';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }

    private _Auth0 = new auth0.WebAuth({
        clientID: environment.auth.clientID,
        domain: environment.auth.domain,
        responseType: 'token',
        redirectUri: environment.auth.redirect,
        scope: environment.auth.scope
    });

    private _authFlag = 'isLoggedIn';
    // Authentication navigation
    private _onAuthSuccessUrl = '/home';
    private _onAuthFailureUrl = '/login';
    private _logoutUrl = 'http://localhost:4200';
    private _expiresAt: number;

    parseHash$ = bindNodeCallback(this._Auth0.parseHash.bind(this._Auth0));

    checkSession$ = bindNodeCallback(this._Auth0.checkSession.bind(this._Auth0));


    get authSuccessUrl(): string {
        return this._onAuthSuccessUrl;
    }

    get authFailureUrl(): string {
        return this._onAuthFailureUrl;
    }

    get authenticated(): boolean {
        return JSON.parse(localStorage.getItem(this._authFlag));
    }

    resetAuthFlag() {
        localStorage.removeItem(this._authFlag);
    }

    login() {
        this._Auth0.authorize();
    }

    setAuth(authResult) {
        this._expiresAt = authResult.expiresIn * 1000 + Date.now();
        // Set flag in local storage stating this app is logged in
        localStorage.setItem(this._authFlag, JSON.stringify(true));
    }

    logout() {
        // Set authentication status flag in local storage to false
        localStorage.setItem(this._authFlag, JSON.stringify(false));
        // This does a refresh and redirects back to homepage
        // Make sure you have the logout URL in your Auth0
        // Dashboard Application settings in Allowed Logout URLs
        this._Auth0.logout({
            returnTo: this._logoutUrl,
            clientID: environment.auth.clientID
        });
    }

}
