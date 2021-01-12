import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  socket:any
  readonly url:string="ws://localhost:3000"
  constructor() {
   this.socket=io(this.url)
  }


  // listen(eventName:string){
  //   return new Observable((subscriber) =>{
  //       this.socket.on(eventName,(data)=>{
  //         subscriber.next(data)
  //       })
  //     });
  // }

  setUpSocketConnection(){
    this.socket=io(this.url)
    // var data=sessionStorage.getItem('currentMsg')
    // this.socket.emit('my message', 'add');

  }
  // emit(eventName:string,data:any){
  //   this.socket.emit(eventName,data)
  // }
}
