import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { SQLite } from '@ionic-native/sqlite'




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  {provide: LOCALE_ID, useValue: 'pt-BR'},
  {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
   SQLite
  
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
