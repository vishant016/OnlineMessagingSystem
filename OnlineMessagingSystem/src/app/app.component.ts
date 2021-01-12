import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { WebSocketService } from './web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _auth:AuthService,private webSocket:WebSocketService){}
  ngOnInit(){
    // this.webSocket.listen('test event').subscribe((data)=>{
    //   console.log(data)
    // })
   // this.webSocket.setUpSocketConnection();

  }
  get isLoggedIn() { return this._auth.isLoggedIn(); }
  title = 'OnlineMessagingSystem';
}
