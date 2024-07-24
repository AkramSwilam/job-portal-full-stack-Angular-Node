import { Component, OnInit, afterNextRender } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,FormsModule,HttpClientModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'jobPortalProject';
  isEmployer:boolean=false
  userInfo:any
  isLoggedIn:Boolean = false
  ngOnInit(): void {
    
  }
  constructor(private router : Router){
    afterNextRender(() => {

    const userData = localStorage.getItem('jobLoginUser')
     if(userData==null){
       this.isLoggedIn=false
     }
     else
     {
        this.isLoggedIn=true
       this.userInfo=JSON.parse(userData)
        if(this.userInfo.UserRole == "Employer"){
          this.isEmployer=true
        }
     }
    })
    
   }
   logoff(){
      localStorage.removeItem('jobLoginUser')
      this.isLoggedIn=false
      this.router.navigate(['/home'])
      

   }
  
  }
