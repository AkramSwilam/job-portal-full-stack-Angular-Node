import { Component, NgModule, OnInit, inject } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { FormBuilder, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgClass, formatNumber } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { JobService } from '../../service/job.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService] 
})

export class LoginComponent {
  loginObj:any={
    "EmailId":"",
    "Password":""
  }
  constructor(private jobSrv :JobService,private router : Router ){

  }
  onLogin(){
    this.jobSrv.login(this.loginObj).subscribe((res:any)=>{
      if(res.Result){
        alert('User logged in Success')
        localStorage.setItem('jobLoginUser',JSON.stringify(res.doc))
        this.router.navigate(["/home"])
      }
      else{
        alert(res.message)
      }
    })
  }
  
  
}

