import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { printLogService } from '../../common/servises/print-log';
import { HttpClient } from '@angular/common/http';
import * as logonAction from '../../common/state/actions/logon.action';
import * as footReducer from '../../common/state/reducers';
import { from } from 'rxjs/internal/observable/from';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-qq-number',
  templateUrl: './qq-number.component.html',
  styleUrls: ['./qq-number.component.css']
})
export class QqNumberComponent implements OnInit {
  public qqNumber:any;
  public passwrod:any;
  public data$: Observable<any>
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private printLog: printLogService,
    private HttpClient: HttpClient,
    private store: Store<footReducer.State>
 
  ) { }
  ngOnInit() {
    this.data$ = this.store.select(footReducer.getLogonState)
  }

  usePhoneNumberLogon() {
    this.printLog.printLog('usePhoneNumberLogon');
    this.router.navigate(['/phoneNumber'])
  }

  goToLogon() {
    this.store.dispatch(new logonAction.SaveInputValue({userName: this.qqNumber,
    passWord: this.passwrod}));
    this.store.dispatch(new logonAction.LogonAction());
  }
}
