import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: Auth, private router: Router) { }

  login() {
    if (this.authService.login(this.username, this.password)) {
      const role = this.authService.getRole();
      if (role === 'Admin') {
        this.router.navigate(['/admin']);
      } else if (role === 'Employee') {
        this.router.navigate(['/employee']);
      }
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
