import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListPageComponent } from './contact-list-page/contact-list-page.component';
import { ListPanelComponent } from './list-panel/list-panel.component';
import { ContactListRoutingModule } from './contact-list.router';


@NgModule({
  imports: [
    CommonModule,
    ContactListRoutingModule
  ],
  declarations: [ContactListPageComponent, ListPanelComponent]
})
export class ContactListModule { }
