import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private _auth:AuthService,private router:Router) { }
  data={email:"",otp:""}

  ngOnInit(): void {
  }
  forgotpassword(){
    var min = Math.ceil(1000);
     var max = Math.floor(10000);
  var otpp= Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
console.log(otpp)
    this.data.otp=otpp.toString()
    sessionStorage.setItem('otp',this.data.otp)
    sessionStorage.setItem('email',this.data.email)
    this._auth.forgotPassword(this.data).subscribe(
      (result)=>{
        console.log("result"+result)
        if(!result){

          this.router.navigateByUrl('/otp')
        }
        console.log(result)

      }
    )
  }
}
