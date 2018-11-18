import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, } from '@angular/fire/database';
import { AddPage } from '../pages/add/add';
import { InfoPage } from '../pages/info/info';

var config = {
  apiKey: "AIzaSyDNeRB1wf7wzUMuzmtxqH08kxx-XgqrvdE",
  authDomain: "test-4176d.firebaseapp.com",
  databaseURL: "https://test-4176d.firebaseio.com",
  projectId: "test-4176d",
  storageBucket: "test-4176d.appspot.com",
  messagingSenderId: "389983249977"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPage,
    InfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPage,
    InfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
