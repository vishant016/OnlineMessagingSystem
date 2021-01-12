import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['../app.component.css']
})
export class EditprofileComponent implements OnInit {


  constructor(private _auth:AuthService,private router:Router) { }
  editData={oldusername:"",username:"",bio:"",website:""}
  ngOnInit(): void {
  }
  editUser(){
    // console.log(this.registerUserData)
    // var registerData=JSON.stringify(this.registerUserData)
    // console.log(registerData)
    // console.log(this.editData.username)
    sessionStorage.removeItem('currentUser')
    sessionStorage.setItem('currentUser',JSON.stringify(this.editData))
    this._auth.editUser(this.editData).subscribe(
      result=>{
        if(!result){
          this.router.navigateByUrl('/profile')
        }
      }

     )
  }

}
