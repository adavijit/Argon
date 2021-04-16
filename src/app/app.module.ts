import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { FirebaseService } from './services/firebase.service';
import { AuthGuard } from './auth.guard';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(
    {
    apiKey: "AIzaSyCXA6txYuow32HAhqPHI1K9h6agP5KgtJ4",
    authDomain: "techt-5cc5e.firebaseapp.com",
    projectId: "techt-5cc5e",
    storageBucket: "techt-5cc5e.appspot.com",
    messagingSenderId: "125647247646",
    appId: "1:125647247646:web:9a4e900720b54cf55cd10f"
  })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
