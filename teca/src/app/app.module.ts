import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {firebaseConfig} from '../environments/environment'
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatTableModule } from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PipesModule } from './pipes/pipes.module';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AngularFireMessagingModule } from '@angular/fire/messaging';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
      BrowserModule
    , IonicModule.forRoot()
    , AppRoutingModule
    , AngularFireModule.initializeApp(firebaseConfig)
    , AngularFireMessagingModule
    , AngularFireAuthModule, BrowserAnimationsModule
    , MatTableModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    PipesModule,
    HttpClientModule,
    ServiceWorkerModule.register('combined-sw.js', { enabled: true})],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
