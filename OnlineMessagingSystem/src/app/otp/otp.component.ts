import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  constructor(private router:Router) { }
otp:String
  ngOnInit(): void {
  }

  verifyOtp(){
    if(this.otp==sessionStorage.getItem('otp').toString()){
      console.log(this.otp)
      this.router.navigateByUrl('/changePassword')
    }
  }


}
