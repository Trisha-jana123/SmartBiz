import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/customer';
import { Auth } from 'src/app/auth';

@Component({
  selector: 'app-view-customers',
  standalone: false,
  templateUrl: './view-customers.html',
  styleUrl: './view-customers.css'
})
export class ViewCustomers implements OnInit {
  customers: any[] = [];
  userRole: string = '';

  constructor(
    private customerService: Customer,
    private authService: Auth,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers();
    this.userRole = this.authService.getRole();
  }

  editCustomer(cust: any) {
    this.router.navigate(['/edit-customer', cust.id]);
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id);
    this.customers = this.customerService.getCustomers(); // Refresh
  }
}
