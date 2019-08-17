import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QqNumberComponent } from './qq-number/qq-number.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { LogonRoutingModule } from './logon-page.router';
import { PhoneNumberVerifyComponent } from './phone-number-verify/phone-number-verify.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LogonRoutingModule,
    FormsModule
  ],
  declarations: [QqNumberComponent, PhoneNumberComponent, PhoneNumberVerifyComponent]
})
export class LogonPageModule { }
