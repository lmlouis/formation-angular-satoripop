import { Component } from '@angular/core';
@Component({
  selector:'app-warning-alert',
  template: `
            <div>
              <h4>Warning Alert</h4>
              <p>Ceci est une warning alert !</p>
            </div>
            `,
  styles:[`
            h4{
              color:brown;
            }
            p{
              color:indianred;
            }
            div{
              padding : 10px;
              background-color:lightpink;
              border: 0.25px solid rgb(255, 133, 151);
              border-radius: 2px;
            }
        `]
})
export class WarningAlertComponent {}
