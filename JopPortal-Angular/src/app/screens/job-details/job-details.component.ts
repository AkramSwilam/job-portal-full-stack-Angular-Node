import { Component, afterNextRender } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { JobService } from '../../service/job.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent {

  activeJobId : number = 0
  jobObj : any
  userInfo:any
  isLoggedin : Boolean = false
  jobApplicationObj = {
    "JobId": 0,
    "JobSeekerId": 0,
    "AppliedDate": "2024-05-06T08:15:27.457Z",
    "ApplicationStatus": "new",
  }
  constructor(private activeRoute : ActivatedRoute ,private jobSrv : JobService,private router:Router){
    afterNextRender(() => {
    const userData = localStorage.getItem('jobLoginUser')
     if(userData==null){
       this.isLoggedin=false
     }
     else
     {
        this.isLoggedin=true
        this.userInfo=JSON.parse(userData)
        this.jobApplicationObj.JobSeekerId= this.userInfo.JobSeekerId
     }
    })
      this.activeRoute.params.subscribe((res:any)=>{
      this.activeJobId=res.jobid
      this.getJobDetail()
      this.jobApplicationObj.JobId=this.activeJobId
    })


  }
  getJobDetail(){
  this.jobSrv.getJobListingById(this.activeJobId).subscribe((res:any)=>{
  this.jobObj = res.docs
  })
  }
  apply(){
    this.jobApplicationObj.JobId=this.activeJobId
    this.jobApplicationObj.JobSeekerId= this.userInfo.JobSeekerId
    this.jobSrv.SendJopApplication(this.jobApplicationObj).subscribe((res:any)=>
    {
      if(res.Result){
        alert("you have successfuly applied for job")
        this.router.navigate(['/home'])
      }
      else{
        alert(res.message)
      }
    })
    
  }
  
}
