import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { JobService } from '../../service/job.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [RouterModule,RouterOutlet,NgClass,CommonModule,FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  isJobSeeker : boolean = true
  employerObj:  any ={
        "CompanyName": "",
        "EmailId": "",
        "Password":"",
        "MobileNo": "",
        "PhoneNo": "",
        "CompanyAddress": "",
        "City": "",
        "State": "",
        "PinCode": "",
        "LogoURL": "",
        "GstNo": "",
  }
  jobSeekerObj :any ={
    "FullName": "",
    "EmailId": "",
    "Password":"",
    "MobileNo": "",
    "ExperienceStatus": "",
    "ResumeUrl": "",
  }
  constructor(private job:JobService,private router : Router){
  }
  register(){
    this.job.registerEmployer(this.employerObj).subscribe((res:any)=>{
      if(res.Result){
        alert('register done')
        this.router.navigate(["/home"])
      }else{
        alert('register not done')
      }
    })
  }
  registerAsJobSeeker(){
    this.job.registerAsJobSeeker(this.jobSeekerObj).subscribe((res:any)=>{
      if(res.Result){
        alert('register done')
        this.router.navigate(["/login"])
      }else{
        alert('register not done')
      }
    })
  }

  }


