import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl="http://localhost:3000/api/register"
  private _loginUrl="http://localhost:3000/api/login"
private _findUsers="http://localhost:3000/api/findUser"
private _editUrl="http://localhost:3000/api/profile"
private _forgotPassUrl="http://localhost:3000/api/forgotPassword"
private _changePasswordUrl="http://localhost:3000/api/changePassword"
redirectUrl:string
  constructor(private http:HttpClient) {

   }

   editUser(user){
     return this.http.post<any>(this._editUrl,user)
   }

   registerUser(user){
     return this.http.post<any>(this._registerUrl,user)
   }
   loginUser(user){
     return this.http.post<any>(this._loginUrl,user)
   }

   forgotPassword(user){
   return this.http.post<any>(this._forgotPassUrl,user)
  }

   logout(){
     sessionStorage.removeItem('currentUser')
   }
   isLoggedIn(){
     if(sessionStorage.getItem('currentUser')){
      // console.log(localStorage.getItem('currentUser'))
       return true
     }
     else{
       return false
     }
   }

changePassword(data){
  return this.http.post<any>(this._changePasswordUrl,data)
}

   findUser(){
    return this.http.get<any>(this._findUsers)
   }
}
