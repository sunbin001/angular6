import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 

import { LandingPageComponent }  from './landing-page/landing-page.component';
 
const routes: Routes = [
    { path: 'pageNotFound', component: LandingPageComponent },
    {
        path: 'logon',
        loadChildren: './logon-page/logon-page.module#LogonPageModule',
    },
    {
        path: 'contact-list',
        loadChildren: './contact-list/contact-list.module#ContactListModule',
    },
    {
        // ** 路径是一个通配符。当所请求的 URL 不匹配前面定义的路由表中的任何路径时，路由器就会选择此路由
        path:"**",redirectTo:"/pageNotFound"   
    }
];
 //tag1
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}