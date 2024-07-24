import { Component, OnInit, afterNextRender } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JobService } from '../../service/job.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-job',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './create-new-job.component.html',
  styleUrl: './create-new-job.component.css'
})
export class CreateNewJobComponent implements OnInit {
  jobObj : any = {
    "JobName" : "" ,
    "CreatedDate" : new Date() ,
    "EmployerId" :0 ,
    "CategoryId" : 0 ,
    "Experience" : "",
    "Package" : "",
    "Location" : "",
    "JobDescription" :"",
    "IsActive":true


  }
  categoryList : any [] = []
  constructor(private jobSrv:JobService,private router:Router){
    afterNextRender(() => {
    const userData = localStorage.getItem('jobLoginUser')
     if(userData!=null){
      const data = JSON.parse(userData)
      this.jobObj.EmployerId=data.EmployerId
     }

     })
   }
ngOnInit(): void {
  this.getJobCategories()
}
getJobCategories(){
  this.jobSrv.getAllCategories().subscribe((res:any) => {
    this.categoryList = res.docs
  })
}
CreateJob(){
  this.jobSrv.createNewJob(this.jobObj).subscribe((res:any)=>{
    if(res.Result)
      {
      alert('post created success')
      this.router.navigate(['/home'])
      }
      else{
      alert(res.message)
      }
  })
}

}
