import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { WebSocketService } from '../web-socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
users={username:""}
  constructor(private webSocket:WebSocketService,private _auth:AuthService) { }

  ngOnInit(): void {
     this.webSocket.setUpSocketConnection();
     this._auth.findUser().subscribe(data=>{
          this.users=data
     })
    // console.log(this.users)
  }



}
