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

  servers:String[] = ["tomcat", "apache"]

  isServerCreated:boolean=false



  constructor() {
    setTimeout(()=>{this.allowNewServer=true},2000)
  }

  ngOnInit(): void {
  }

  onServerCreation():void{
    this.isServerCreated=true
    this.servers.push(this.serverName)
    this.serverCreationStatus = "Congratulation, one server created! Server name : "+this.serverName
  }


}
