import { Component } from '@angular/core';

//Welcome Component
@Component({
    templateUrl: 'app/welcome/welcome.component.html',
    styleUrls: ['app/welcome/welcome.component.css']
})
export class WelcomeComponent {
  message = "Welcome to Oladele's Video Portal (OVP)";
}