import {Action} from '@ngrx/store';
// import {Err, Quote} from '../domain';

export const LOGON = '[Logon] Logon';
export const LOGON_SUCCESS = '[Logon] Logon Success';
export const LOGON_FAIL = '[Logon] Logon Fail';
export const LOGON_SAVE_PASSWORD ='[Logon] Logon Passwrod'
export const SAVE_INPUT_VALUE = '[Logon] Logon save input value'

export class LogonAction implements Action {
  readonly type = LOGON;
}

export class LogonSuccessAction implements Action {
  readonly type = LOGON_SUCCESS;

  constructor(public payload?: any) {
  }
}

export class LogonFailAction implements Action {
  readonly type = LOGON_FAIL;

  constructor(public payload?: string) {
  }
}

export class LogonSavePassword implements Action {
  readonly type = LOGON_SAVE_PASSWORD;
  constructor(public payload?: any) {}
}

export class SaveInputValue implements Action {
  readonly type = SAVE_INPUT_VALUE;
  constructor(public payload?: any) {}
}


export type Actions
  = LogonAction
  | LogonSuccessAction
  | LogonFailAction;
