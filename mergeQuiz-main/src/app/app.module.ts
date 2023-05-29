import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitlepageComponent } from './component/titlepage/titlepage.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { CoverpageComponent } from './component/coverpage/coverpage.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import {MatToolbarModule} from '@angular/material/toolbar';
import { PreviewComponent } from './component/preview/preview.component';
import { PreviewPageComponent } from './component/preview-page/preview-page.component';

import { MatListModule } from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
// import { Dialog } from '@angular/cdk/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { VerifyemailComponent } from './component/verifyemail/verifyemail.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';

import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    TitlepageComponent,
    CoverpageComponent,
    PreviewComponent,
    PreviewPageComponent,
    DialogExampleComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    VerifyemailComponent,
    ForgotpasswordComponent
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule ,
    MatDialogModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatChipsModule,
    MatListModule,
    MatDividerModule,
    MatDatepickerModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
