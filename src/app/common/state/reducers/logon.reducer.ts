import { Logon } from '../models/logon.models';
import * as actions from '../actions/logon.action';
import { createFeatureSelector, createSelector } from '@ngrx/store'

export interface State {
    logon:Logon,
    saveInputValue: Logon
}

export const initialState: State = {
    logon:{
        userName: '111',
        passWord: '222'
    },
    saveInputValue: {
        userName: '',
        passWord: ''     
    }
};

export function reducer(state = initialState, action: {type: string; payload: any}): State {
  switch (action.type) {
    case actions.LOGON_SAVE_PASSWORD:
      return {...state, logon: action.payload};
      case actions.SAVE_INPUT_VALUE:
      return {...state, saveInputValue: action.payload};
    case actions.LOGON_FAIL:
    default:
      return state;
  }
}
