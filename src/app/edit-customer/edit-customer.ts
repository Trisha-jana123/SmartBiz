import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/customer';

@Component({
  selector: 'app-edit-customer',
  standalone: false,
  templateUrl: './edit-customer.html',
  styleUrl: './edit-customer.css'
})
export class EditCustomer implements OnInit {

  customer: any = {};
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private customerService: Customer,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.customer = this.customerService.getCustomerById(this.id);
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.id, this.customer);
    alert('Customer updated successfully!');
    this.router.navigate(['/admin']);
  }
}