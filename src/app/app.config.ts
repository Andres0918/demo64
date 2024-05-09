import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(HttpClientModule), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"project-ach64","appId":"1:12970907803:web:8b138ff102fcdfec8dce3e","storageBucket":"project-ach64.appspot.com","apiKey":"AIzaSyDxnHsjGaGu1MldTJE2AuBZwhxoUeK7oUs","authDomain":"project-ach64.firebaseapp.com","messagingSenderId":"12970907803","measurementId":"G-KQYYK30YRZ"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
