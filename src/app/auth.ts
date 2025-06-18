import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private users = [
    { username: 'admin', password: 'admin123', role: 'Admin' },
    { username: 'ravi', password: 'ravi123', role: 'Employee' },
    { username: 'sita', password: 'sita123', role: 'Employee' }
  ];

  private currentUser: any = null;

  constructor(private router: Router) {
    this.loadUserFromSession();
  }

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.currentUser = user;
      sessionStorage.setItem('currentUser', JSON.stringify(user)); // ✅ use sessionStorage
      return true;
    }
    return false;
  }

  getRole(): string {
    return this.currentUser?.role;
  }

  isLoggedIn(): boolean {
    return this.currentUser != null;
  }

  logout() {
  this.currentUser = null;

  // ✅ Only remove current user — don't clear all localStorage!
  localStorage.removeItem('currentUser');

  

  this.router.navigate(['/login']);
}


  private loadUserFromSession() {
    const storedUser = sessionStorage.getItem('currentUser'); // ✅ load from session
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
  }

  getCurrentUsername(): string {
    return this.currentUser?.username;
  }
}
