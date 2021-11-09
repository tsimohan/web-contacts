import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { ContactsComponent } from './contacts/contacts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { SettingsComponent } from './settings/settings.component';
import { ContactReducer } from './store/reducers/contact.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    DashboardComponent,
    MessagesComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      contact: ContactReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
