import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css'],
  providers:[]
})
export class LoginComponent implements OnInit {
loginUserData={email:"",password:""}
emailError=false
passError=false
  constructor(private _auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    if(this._auth.isLoggedIn()){
      this._auth.logout()
    }
  }

  loginUser()
  {
  //  console.log(this.loginUserData)
    this._auth.loginUser(this.loginUserData).subscribe(
      result=>{
        console.log("in login.ts"+result.msg)
        if(result.msg=="Invalid email"){
          this.emailError=true
        }
        else if(result.msgg=="Invalid password"){
          this.passError=true
        }
        else if(result){
       sessionStorage.setItem('currentUser',JSON.stringify(result))
       if(this._auth.isLoggedIn()){
        this.router.navigateByUrl('/home')
      }
      }
 }
    )
  }


}
