import { Component } from '@angular/core';
import { Customer } from 'src/app/customer';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth';

@Component({
  selector: 'app-add-customer',
  standalone: false,
  templateUrl: './add-customer.html',
  styleUrl: './add-customer.css'
})
export class AddCustomer {
  name: string = '';
  mobile: string = '';
  address: string = '';

  constructor(
    private customerService: Customer,
    private router: Router,
    private auth: Auth // ✅ to get user role
  ) {}

  addCustomer() {
    if (!this.name || !this.mobile || !this.address) {
      alert('Please fill all fields');
      return;
    }

    this.customerService.addCustomer({
      name: this.name,
      mobile: this.mobile,
      address: this.address
    });

    alert('Customer added successfully!');

    // ✅ Navigate based on user role
    const role = this.auth.getRole();
    if (role === 'Admin') {
      this.router.navigate(['/admin/view-customers']);
    } else {
      this.router.navigate(['/employee/view-customers']);
    }
  }
}
