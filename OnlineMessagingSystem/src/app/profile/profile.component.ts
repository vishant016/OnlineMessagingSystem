import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
 userName
 bio
 website
  ngOnInit(): void {
    this.userName=JSON.parse(sessionStorage.getItem('currentUser')).username
    this.bio=JSON.parse(sessionStorage.getItem('currentUser')).bio
    this.website=JSON.parse(sessionStorage.getItem('currentUser')).website
  }

}
