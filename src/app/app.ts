import { Component } from '@angular/core';
import { Auth } from './auth'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
   userRole: string = '';

  constructor(private authService: Auth, private router: Router) {
    this.userRole = this.authService.getRole(); // shows Admin or Employee
  }

  logout() {
    this.authService.logout();
  }
}