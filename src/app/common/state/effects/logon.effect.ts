import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { of , pipe} from 'rxjs';
import { map, switchMap, catchError, tap ,take} from 'rxjs/operators';
import * as logonActions from '../actions/logon.action';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as footReducer from '../../../common/state/reducers';



@Injectable() 
export class logonEffect {

    @Effect()
    logon$: Observable<Action> = this.actions$.pipe(
      ofType<logonActions.LogonSuccessAction>(logonActions.LOGON_SUCCESS),
      take(1),
      tap((data) => {

      })
    );

    @Effect()
    sendLogon$: Observable<Action> = this.actions$.pipe(
      ofType<logonActions.LogonAction>(logonActions.LOGON),
      take(1),
      switchMap(val =>
        this.HttpClient.get('http://localhost:4000/dummy/logon.json').pipe(
          map(data => new logonActions.LogonSavePassword(data)),
          catchError(err => of(new logonActions.LogonFailAction(err)))
        ),
      )
    );

    @Effect({dispatch: false})
    checkLogonPassword$: Observable<Action> = this.actions$.pipe(
      ofType<logonActions.LogonSavePassword>(logonActions.LOGON_SAVE_PASSWORD),
      take(1),
      switchMap(() => this.store.select(footReducer.getLogonData).pipe(
        tap((data:any) => {
         if(data.logon.passWord === data.saveInputValue.passWord && data.logon.userName === data.saveInputValue.userName){
          this.router.navigate(['/contact-list'])
         } else {
            alert('logon fail')
         }
        })
      ))
    );


  constructor(private actions$: Actions, 
              private HttpClient: HttpClient,     
              private store: Store<footReducer.State>,
              private router:Router
            ) {}
}