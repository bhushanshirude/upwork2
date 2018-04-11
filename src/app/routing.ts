import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { HomeComponent } from 'home';
import { LoginComponent } from 'login/login';
import { ProfileComponent } from 'profile/profile';
import { RegisterComponent } from 'register/register';
import { PasswordComponent } from 'password/password';
import { TextMaskModule } from 'angular2-text-mask';
import { ForgotComponent } from 'forgotpassword/forgotpassword';
import { UpdateComponent } from 'updateprofile/updateprofile';
import { PostComponent } from 'postjobprofile/postjobprofile';
import { PostUpdateComponent } from 'postjobupdate/postjobupdate';
import { ViewComponent } from 'viewjob/viewjob';
import { SearchComponent } from 'searchjob/searchjob';
import { verifyComponent } from 'verify/verify';
import { FloginComponent } from 'flogin/flogin';
import { userComponent } from 'userprofile/userprofile';
import { ViewproposalComponent } from 'viewproposal/viewproposal.component';
import { ViewinviteComponent } from 'viewinvite/viewinvite.component';
import { ViewsearchComponent } from 'viewsearch/viewsearch.component';
import { ViewpostComponent } from 'viewpost/viewpost.component';
import { SavejobComponent } from 'savejob/savejob.component';
import { InvitationviewComponent } from 'invitationview/invitationview.component';
import { JobsearchComponent } from 'jobsearch/jobsearch.component';


export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home', component: HomeComponent,
        children: [
            //All are the Freelancer.
            { path: 'register', component: RegisterComponent },
            { path: 'verify/:_id', component: verifyComponent },
            { path: 'password', component: PasswordComponent },
            { path: 'login', component: LoginComponent },
            { path: 'flogin', component: FloginComponent },
            { path: "forgot/:id", component: ForgotComponent },
            { path: 'profile', component: ProfileComponent },
            { path: "update", component: UpdateComponent },
            { path: "userprofile", component: userComponent },

            // All are search job
            {
                path: 'search', component: SearchComponent,
                children: [
                    {path:'',redirectTo:'job',pathMatch:'full'},
                    { path: 'saved', component: SavejobComponent },
                    { path: 'invitation', component: InvitationviewComponent },
                    { path: 'job', component: JobsearchComponent }
                ]
            },
            //All are Hire for project
            { path: 'post', component: PostComponent },
            { path: 'postupdate', component: PostUpdateComponent },
            {
                path: 'viewjob', component: ViewComponent,
                children: [
                    { path: '', redirectTo: 'viewpost', pathMatch: "full" },
                    { path: 'viewpost', component: ViewpostComponent },
                    { path: 'viewproposal', component: ViewproposalComponent },
                    { path: 'viewinvite', component: ViewinviteComponent },
                    { path: 'viewsearch', component: ViewsearchComponent }
                ]
            },
        ]
    },
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

