import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
          `h3{
            text-align: center;
            color: darkgray;
          }
          .white-text{
            color: white;
          }`]
})
export class AppComponent {
  username : string = "Jean"
  showSecret : boolean =  false
  log: string[] = []
  onToggleSecret():void{
  this.showSecret = !this.showSecret
  const status  = this.showSecret == true ?  "affiché" : "caché"
  this.log.push(this.log.length + 1 + " " + status + " at "+ new Date())

  }

}
