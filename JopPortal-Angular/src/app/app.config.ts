import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';


const firebaseConfig = {
  apiKey: "AIzaSyDj826k_kedDmgXxW8qVopfBb2rC5gavPU",
  authDomain: "job-portal-angular.firebaseapp.com",
  projectId: "job-portal-angular",
  storageBucket: "job-portal-angular.appspot.com",
  messagingSenderId: "145187902094",
  appId: "1:145187902094:web:2e7a91dba50804785a6fdf"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes), provideClientHydration(),
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth())
    )
  ],
};
