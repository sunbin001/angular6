import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhoneNumberComponent }    from './phone-number/phone-number.component';
import { PhoneNumberVerifyComponent }    from './phone-number-verify/phone-number-verify.component';

import { QqNumberComponent }  from './qq-number/qq-number.component';

const LogonRoutes: Routes = [
    { path: '' , redirectTo:'/qqNumber', pathMatch: 'full'},
    { path: 'phoneNumber',  component: PhoneNumberComponent},
    { path: 'qqNumber', component: QqNumberComponent},
    { path: 'phoneNumberVerify', component: PhoneNumberVerifyComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(LogonRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LogonRoutingModule { }