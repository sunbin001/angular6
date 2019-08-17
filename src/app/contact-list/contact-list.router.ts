import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListPageComponent }    from './contact-list-page/contact-list-page.component';


const LogonRoutes: Routes = [
    { path: 'contact' , redirectTo:'/contact-list', pathMatch: 'full'},
    { path: 'contact-list',  component: ContactListPageComponent,}
];

@NgModule({
  imports: [
    RouterModule.forChild(LogonRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactListRoutingModule { }