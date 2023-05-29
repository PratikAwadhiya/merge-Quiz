import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string = '';
  password: string= '';

  constructor(private auth: AuthService) { }


  ngOnInit(): void {
      
  }  

  login()
  {
    if(this.email =='')
    {
      alert("you have to enter your email")
      return;
    }
    
    if(this.password =='')
    {
      alert("you have to enter your password")
      return;
    }
    this.auth.login(this.email,this.password)
    this.email='';
    this.password='';
  }

  // signin with Google
  signInWithGoogle()
  {
    this.auth.googleSignIn();
  }

}
