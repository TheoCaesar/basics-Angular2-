import { Component } from '@angular/core';
import { timestamp } from 'rxjs-compat/operator/timestamp';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  displayMsg = false;
  logs = [];

  onClick() {
    this.displayMsg = !this.displayMsg;
    let action = (this.displayMsg)  ? 'Displayed Message' : 'Hid Message';
    let timestamp = new Date().toLocaleString()
    this.logs.push(`[${timestamp}] - ${action}`);
  }

  
}
