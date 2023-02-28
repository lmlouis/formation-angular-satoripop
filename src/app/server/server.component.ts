import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles:[    `.online {
    border: 1px solid red;
  }`]


})
export class ServerComponent {
  serverId:string = "XXX"
  serverStatus:String = "offline"

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline"
   }

  getServerStatus(){
    return this.serverStatus
  }

  getColore():String{
    return this.serverStatus == "online" ? 'green' : 'red'
  }

}
