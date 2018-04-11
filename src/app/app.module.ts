import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule ,JsonpModule} from '@angular/http';
import { ImageUploadModule } from 'ng2-imageupload';
import {OrdinalPipe} from 'filterservice';

import { TextMaskModule } from 'angular2-text-mask/dist/angular2TextMask';
import { routing } from './routing';
import { AppComponent } from './app.component';
import { HomeComponent } from 'home';
import { LoginComponent } from 'login/login';
import { ProfileComponent } from 'profile/profile';
import {RegisterComponent}from 'register/register';
import {PasswordComponent}from 'password/password';
import{ForgotComponent}from 'forgotpassword/forgotpassword';
import {UpdateComponent}from 'updateprofile/updateprofile';
import {PostComponent}from 'postjobprofile/postjobprofile';
import {PostUpdateComponent} from 'postjobupdate/postjobupdate';
import {ViewComponent}from 'viewjob/viewjob';
import {SearchComponent}from 'searchjob/searchjob';
import { httpService }from 'httpservice';
import {verifyComponent}from 'verify/verify';
import {FloginComponent}from 'flogin/flogin';
import{userComponent} from 'userprofile/userprofile';
import { ViewproposalComponent } from 'viewproposal/viewproposal.component';
import { ViewinviteComponent } from 'viewinvite/viewinvite.component';
import { ViewsearchComponent } from 'viewsearch/viewsearch.component';
import { ViewpostComponent } from 'viewpost/viewpost.component';
import { SavejobComponent } from 'savejob/savejob.component';
import { InvitationviewComponent } from 'invitationview/invitationview.component';
import { JobsearchComponent } from 'jobsearch/jobsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
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
    userComponent,
    ViewproposalComponent,
    ViewinviteComponent,
    ViewsearchComponent,
    ViewpostComponent,
    SavejobComponent,
    InvitationviewComponent,
    JobsearchComponent,
    OrdinalPipe,
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
