import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SearchBarComponent } from './components/search-bar/search-bar';
import { AddContacts } from './components/add-contacts/add-contacts';
import { Contacts } from './components/contacts/contacts';

@NgModule({
  declarations: [App, SearchBarComponent, AddContacts, Contacts],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule {}
