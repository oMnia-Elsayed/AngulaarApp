
import { Component } from '@angular/core';

@Component ({
  selector: 'app-warning-alert',
  template: `<p> Warning </p>`,
  styles: [
    `
    p{
      padding: 20px;
      background-color: rgb(240, 172, 172);
      border: 1px solid red;
    }`
  ]
})
export class WarningAlertComponent {

}
