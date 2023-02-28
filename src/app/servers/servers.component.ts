import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer:boolean = false

  serverCreationStatus:String = "No server created"

  serverName:String = ""



  constructor() {
    setTimeout(()=>{this.allowNewServer=true},2000)
  }

  ngOnInit(): void {
  }

  onServerCreation():void{
    this.serverCreationStatus = "Congratulation, one server created! Server name : "+this.serverName
  }

}
