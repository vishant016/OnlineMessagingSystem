import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../app.component.css']
})
export class RegisterComponent implements OnInit {
emailError=false
userError=false
public registerUserData={email:"",username:"" ,mobileno:"",password:"",bio:"Bio",website:"website"}
  constructor(private _auth:AuthService, private router:Router) {

  }

  ngOnInit(): void {
  }
registerUser(){
  this._auth.registerUser(this.registerUserData).subscribe(
    result=>{
      console.log(result.msg)
      if(result.msg=="Registration done"){
        this.router.navigateByUrl('/login')
      }
      else if(result.msg=="Email is already taken"){
        console.log("Email is taken")
        this.emailError=true;
      }
      else if(result.msgg=="Username is already taken"){
        this.userError=true
      }
    }

   )
}
}
