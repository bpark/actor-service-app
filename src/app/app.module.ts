import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ActorListComponent} from './actor-list/actor-list.component';
import {HttpClientModule} from '@angular/common/http';
import {NavBarComponent} from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorListComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
