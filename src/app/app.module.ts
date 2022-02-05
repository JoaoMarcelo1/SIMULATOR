import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './login.service';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule} from '@angular/fire/auth';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
     AngularFireModule.initializeApp(environment.firebase),
     AngularFireAuthModule
     
  ],

  providers: [
  {provide: LOCALE_ID, useValue: 'pt-BR'},
  {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
   
   AuthService
   
  
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
