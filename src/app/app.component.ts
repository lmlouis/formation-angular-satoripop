import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
          `h3{
            text-align: center;
            color: darkgray;
          }`]
})
export class AppComponent {
  username : string = "Jean"

}
