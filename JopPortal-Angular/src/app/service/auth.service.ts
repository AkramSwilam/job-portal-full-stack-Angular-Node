import { Injectable, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router, Routes } from '@angular/router';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseAuth = inject(Auth)
  /*constructor(private fireauth : AngularFireAuth , private router : Router) { }
  login(email : string , password : string )
  {
    this.fireauth.signInWithEmailAndPassword(email,password).then( ()=> 
      {
        localStorage.setItem('token','true');
        this.router.navigate(['/home'])
      }, err => {
        alert(err.message);
        this.router.navigate(['/login'])
      }
    )
  }
  

  register(email : string , password : string ){
    this.fireauth.createUserWithEmailAndPassword(email,password).then( () =>  {
      alert('Registration Successful');
      this.router.navigate(['/login']);
    },err =>{
      alert(err.message);
      this.router.navigate(['/registration']);
    })
  
  }

  logout(){
    this.fireauth.signOut().then(  () => 
    {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])

    },err => {
      alert(err.message)
    })

  }
*/
login(email : string , password : string ){
  const promise = signInWithEmailAndPassword(this.firebaseAuth,email,password).then(()=>{})
  return from(promise)
}  
}
