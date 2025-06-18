import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Auth } from 'src/app/auth';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: Auth, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const userRole = this.authService.getRole();

    if (userRole === expectedRole) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
