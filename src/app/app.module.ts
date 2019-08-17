import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LandingPageComponent }  from './landing-page/landing-page.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.router.module'
import { LogonPageModule } from './logon-page/logon-page.module';
import { ContactListModule } from './contact-list/contact-list.module';
import { printLogService } from './common/servises/print-log'
import { HttpClientModule } from '@angular/common/http';
import { AppStoreModule } from './common/state/reducers/index';
import { logonEffect } from './common/state/effects/logon.effect';
import { from } from 'rxjs/internal/observable/from';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [ //- 视图类属于这个模块。 Angular 有三种类型的视图类： 组件 、 指令 和 管道 。
    AppComponent,
    LandingPageComponent
  ],
  imports: [ //- 本模块组件模板中需要由其它导出类的模块。
    BrowserModule,
    LogonPageModule,
    ContactListModule,
    AppRoutingModule,
    HttpClientModule,
    AppStoreModule,
    EffectsModule.forRoot([logonEffect])
  ],
  providers: [printLogService], // 服务的创建者。本模块把它们加入全局的服务表中，让它们在应用中的任何部分都可被访问到。
  bootstrap: [AppComponent] //- 应用的主视图，称为根组件，它是所有其它应用视图的宿主。只有根模块需要设置 bootstrap 属性中。
})
export class AppModule { }
