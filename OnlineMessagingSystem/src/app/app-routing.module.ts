import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { ChatComponent } from './chat/chat.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { OtpComponent } from './otp/otp.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';


const routes: Routes = [

{
  path:'',

  redirectTo:'login',
  pathMatch:'full'
},
{
    path:'home',

    component:HomeComponent
},
{ path:'login',

  component:LoginComponent
},
{
  path:'register',
  component:RegisterComponent
},
{
  path:'chat',
  component:ChatComponent
},
{
  path:'profile',
  component:ProfileComponent
},{
  path:'editprofile',
  component:EditprofileComponent
},{
  path:'forgot',
  component:ForgotpasswordComponent
},{
  path:'otp',
  component:OtpComponent
},{
  path:'changePassword',
  component:ChangepasswordComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
