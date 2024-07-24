import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { RegistrationComponent } from './screens/registration/registration.component';
import { JobsComponent } from './screens/jobs/jobs.component';
import { CreateNewJobComponent } from './screens/create-new-job/create-new-job.component';
import { JobDetailsComponent } from './screens/job-details/job-details.component';
import { JobListingComponent } from './screens/job-listing/job-listing.component';
import { MyJobsComponent } from './screens/my-jobs/my-jobs.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
export const routes: Routes = [
    {
        path:'',
        redirectTo:'Home',
        pathMatch:'full'
    },
    {
        path:'Home',
        component:HomeComponent
    },
    {
        path:'login',
        component:LoginComponent
    }
    ,
    {
        path:'registraion',
        component:RegistrationComponent
    }
    ,
    {
        path:'jobs',
        component:JobsComponent
    }
    ,
    {
        path:'create-new-job',
        component:CreateNewJobComponent
    }
    ,
    {
        path:'job-details/:jobid',
        component:JobDetailsComponent
    }
    ,
    {
        path:'job-listing',
        component:JobListingComponent
    }
    ,
    {
        path:'my-jobs',
        component:MyJobsComponent
    }
    ,
    {
        path:'**',
        component:HomeComponent
    }

];
@NgModule({
    imports:[RouterModule.forRoot(routes),                        
    ],
    exports:[RouterModule]
    
})
export class AppRoutingModule{}

