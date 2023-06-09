import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { environment } from "src/environments/environment";

@NgModule({
    declarations: [AppComponent],
    entryComponents : [],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        IonicModule.forRoot(),
        AppRoutingModule
    ],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
    bootstrap: [AppComponent],
})
export class AppModule {}