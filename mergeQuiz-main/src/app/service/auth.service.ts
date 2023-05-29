import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import {GoogleAuthProvider} from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private fireauth : AngularFireAuth, private router : Router) { }


  login(email:string,password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then((res)=>{
      localStorage.setItem('token', 'true');
      this.router.navigate(['/cover'])
    },err=>{
      alert(err.message)

      this.router.navigate(['/login'])
    })
  }

//signup
signup(email:string,password:string)
{
  this.fireauth.createUserWithEmailAndPassword(email,password).then((res)=>{
    alert('user registration successfully')
    this.router.navigate(['/login'])
  },err=>{
    alert(err.message)
    this.router.navigate(['/login'])
  })
}

// logout

logout()
{
  this.fireauth.signOut().then(()=>{
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  },err=>{
    alert(err.module)
  })
}


// forgot password
forgotpassword(email:string)
{
  this.fireauth.sendPasswordResetEmail(email).then(()=>{
    this.router.navigate(['/verify-email']);
  },err=>{
    alert(err.message)
  })
}

// sign in with google
googleSignIn(){
  return this.fireauth.signInWithPopup(new GoogleAuthProvider).then( res =>{

    this.router.navigate(['/cover'])
    localStorage.setItem('token',JSON.stringify(res.user?.uid));

  },err=>{
    alert(err.message)
  })
}



}
