//built-in
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import {ButtonModule} from 'primeng/button';
import {HttpClientModule} from '@angular/common/http';
// import { GaugeModule } from 'angular-gauge';
import { FlexLayoutModule } from '@angular/flex-layout';
import {CardModule} from 'primeng/card';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {PasswordModule} from 'primeng/password';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextModule} from 'primeng/inputtext';

// import { HttpClient } from '@angular/common/http';



//components
import { SignupComponent } from './components/user/signup/signup.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    UserComponent, 
    
  ],
  imports: [
    // HttpClient,
    InputTextModule,
    FormsModule,
    AutoCompleteModule,
    CardModule,
    ButtonModule,
    PasswordModule,
    RadioButtonModule,
    //  ServiceWorkerModule.register('/ngsw-worker.js',{enabled: environment.production} ),
    BrowserModule,

    // you can redesign roots
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // GaugeModule.forRoot(),
    FlexLayoutModule,
    
//     ServiceWorkerModule.register('mqttchat_sw_1_0.js', {
//   enabled: environment.production,
//   // Register the ServiceWorker as soon as the app is stable
//   // or after 30 seconds (whichever comes first).
//   // registrationStrategy: 'registerWhenStable:30000'
// })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

