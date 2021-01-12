import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private _auth:AuthService,private router:Router) { }

data={password:"",cpassword:"",email:""}
  ngOnInit(): void {
  }

  changePassword(){
      if(this.data.password==this.data.cpassword){
        this.data.email=sessionStorage.getItem('email')
          this._auth.changePassword(this.data).subscribe(result=>{
            if(result.msg=='password changed'){
              sessionStorage.removeItem('email')
              sessionStorage.removeItem('otp')
              this.router.navigateByUrl('/login')
            }
          })
      }
  }
}
