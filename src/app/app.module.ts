import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule ,JsonpModule} from '@angular/http';
import { ImageUploadModule } from 'ng2-imageupload';

import { TextMaskModule } from 'angular2-text-mask/dist/angular2TextMask';
import { routing } from './routing';
import { AppComponent } from './app.component';
import { HomeComponent } from 'home';
import { UserComponent } from 'user';
import { LoginComponent } from 'login';
import { ProfileComponent } from 'profile';
import {TestComponent }from 'test.component';
import {QuesComponent } from 'question';
import {RegisterComponent}from 'register';
import {PasswordComponent}from 'password';
import{ForgotComponent}from 'forgotpassword';
import {UpdateComponent}from 'updateprofile';
import {PostComponent}from 'postjobprofile';
import {PostUpdateComponent} from 'postjobupdate';
import {ViewComponent}from 'viewjob';
import {SearchComponent}from 'searchjob';
import { httpService }from 'httpservice';
import {verifyComponent}from 'verify';
import {FloginComponent}from 'flogin';
import{userComponent} from 'userprofile/userprofile'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    LoginComponent,
    ProfileComponent,
    TestComponent,
    QuesComponent,
    RegisterComponent,
    PasswordComponent,
    ForgotComponent,
    UpdateComponent,
    PostComponent,
    PostUpdateComponent,
    ViewComponent,
    SearchComponent,
    verifyComponent,
    FloginComponent,
    userComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    TextMaskModule,
    ImageUploadModule
  ],
  providers: [httpService],

  bootstrap: [AppComponent ]
})
export class AppModule { }
