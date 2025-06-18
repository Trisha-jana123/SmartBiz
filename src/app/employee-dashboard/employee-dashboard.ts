import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  standalone: false,
  templateUrl: './employee-dashboard.html',
  styleUrl: './employee-dashboard.css'
})
export class EmployeeDashboard {
  constructor(private router: Router) {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}