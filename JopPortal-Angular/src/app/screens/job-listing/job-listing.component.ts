import { CommonModule } from '@angular/common';
import { Component, afterNextRender } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JobService } from '../../service/job.service';

@Component({
  selector: 'app-job-listing',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './job-listing.component.html',
  styleUrl: './job-listing.component.css'
})
export class JobListingComponent {
  userInfo : any 
  jobList :any[]=[]
constructor(private jobSrv : JobService){
  
  afterNextRender(() => {
    const userData = localStorage.getItem('jobLoginUser')
     if(userData !== null){
       this.userInfo=JSON.parse(userData)
       this.getJobsByEmploye()
     }
     
    })
    
}
getJobsByEmploye(){
  console.log(this.userInfo);
  
  this.jobSrv.GetJobsByEmployerId(this.userInfo.EmployerId).subscribe((res:any)=>
  {
    this.jobList= res.docs
  })
}
rejectApplication(jobid:string){
  console.log(jobid);
  
  this.jobSrv.rejectJobApplication(jobid).subscribe((res:any)=>
  {
    if(res.Result){
      alert("Application deleted")
    }
  })
}
}

