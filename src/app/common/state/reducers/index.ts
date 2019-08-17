import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';


/**
 * storeFreeze 用于防止 state 被修改，在 Redux 中我们必须确保 state 是不可更改的，这个函数
 * 有助于帮我们检测 state 是否被有意或无意的修改了。当 state 发生修改时，会抛出一个异常，这一点
 * 在开发时非常有帮助。根据环境变量的值，发布时会不包含这个函数。
 */

import {storeFreeze } from 'ngrx-store-freeze'
import {
    Action,
    ActionReducerMap,
    ActionReducer,
    MetaReducer,
    StoreModule,
    compose,
    createSelector,
    createFeatureSelector,
    combineReducers
  } from '@ngrx/store';

  import * as fromLogon from './Logon.reducer';
  import { Logon } from '../models/logon.models';
  import { from } from 'rxjs/internal/observable/from';

/**
 * 正如我们的 reducer 像数据库中的表一样，我们的顶层 state 也包含各个子 reducer 的 state
 * 并且使用一个 key 来标识各个子 state
 */

  export interface State {
    logon: fromLogon.State;
  }
  
  const initialState :State  = {
      logon: fromLogon.initialState
  }

   const reducers =  {
    logon: fromLogon.reducer,
  };

  const combine :ActionReducer<State> = combineReducers(reducers);

  export function reducer(state = initialState, action: any ): State {
    return combine(state, action)
  }

  
export const getLogonState = createFeatureSelector<Logon>('logon');

export const getLogonData = createSelector(getLogonState, e => {
  return e;
})



  // @NgModule({
  //     imports: [
  //       StoreModule.forRoot(reducer),
  //       StoreRouterConnectingModule,
  //       StoreDevtoolsModule.instrument({ maxAge: 50 })
  //     ]
  // })

  @NgModule({
    imports: [
      /**
       * StoreModule.provideStore  仅需引入一次，请把它包含在根模块或者 CoreModule 中
       * 我们这里为了方便组织，新建了一个 AppStoreModule，但也是只在 CoreModule 中引入的
       */
      StoreModule.forRoot(reducers),
      StoreRouterConnectingModule,
      // DevTool 需要在 StoreModule 之后导入
      StoreDevtoolsModule.instrument({ maxAge: 50 })
    ]
  })


  export class AppStoreModule {
}