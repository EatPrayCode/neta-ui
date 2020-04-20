import { createAction } from '@ngrx/store';

export const authLogin = createAction('[Auth] Login');
export const authLogout = createAction('[Auth] Logout');

export const authLoginComplete = createAction('[Auth] Login Complete');
export const authLogoutComplete = createAction('[Auth] Logout Complete');


export const authLoginSuccess = createAction('[Auth] Login Success');

