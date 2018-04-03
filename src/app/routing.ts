import{ModuleWithProviders}from '@angular/core';
import {RouterModule,Routes ,ActivatedRoute}from '@angular/router';
import {HomeComponent} from 'home';
import { UserComponent } from 'user';
import { LoginComponent } from 'login';
import { ProfileComponent } from 'profile';
import {QuesComponent } from 'question';
import {TestComponent }from 'test.component';
import {RegisterComponent}from 'register';
import {PasswordComponent}from 'password';
import { TextMaskModule } from 'angular2-text-mask';
import{ForgotComponent}from 'forgotpassword';
import {UpdateComponent}from 'updateprofile';
import {PostComponent}from 'postjobprofile';
import {PostUpdateComponent} from 'postjobupdate';
import {ViewComponent}from 'viewjob';
import {SearchComponent}from 'searchjob';
import {verifyComponent}from 'verify';
import {FloginComponent}from 'flogin';


export const routes :Routes=[

    {path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent,
children:[
    {path:'user',component:UserComponent},
    {path:'profile',component:ProfileComponent},
    {path:'login',component:LoginComponent},
    {path:'test',component:TestComponent},
    {path:'register',component:RegisterComponent},
    {path:'password',component:PasswordComponent},
    {path:"start/:_id",component:QuesComponent},
    {path:"update",component:UpdateComponent},
    {path:'post',component:PostComponent},
    {path:'postupdate' , component:PostUpdateComponent},
    {path:'viewjob',component:ViewComponent},
    {path:'search',component:SearchComponent},
    {path:'verify/:_id',component:verifyComponent},
    {path:'flogin',component:FloginComponent},
    {path:"forgot/:id",component:ForgotComponent},
    
    
]},
];
export const routing:ModuleWithProviders =RouterModule.forRoot(routes);

