import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { GamesModule } from './features/games/games-module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    GamesModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
