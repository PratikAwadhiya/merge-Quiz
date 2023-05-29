import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit{

  email:string ='';
  // password : string = '';

  constructor(private auth:AuthService) {}
  ngOnInit(): void {
      
  }

  sendlink()
  {
    // console.log(this.email)
    this.auth.forgotpassword(this.email)
    this.email=''
  }

}
