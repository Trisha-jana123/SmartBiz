import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-dashboard-summary',
  templateUrl: './dashboard-summary.html',
  styleUrl: './dashboard-summary.css',
  standalone: false
})
export class DashboardSummary implements OnInit {
  totalCustomers = 0;
  totalProducts = 0;
  totalSales = 0;

  constructor(private customer: Customer, private product: Product) {}

  ngOnInit() {
    const customers = this.customer.getCustomers();
    const products = this.product.getProducts();
    const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');

    this.totalCustomers = customers.length;
    this.totalProducts = products.length;
    this.totalSales = transactions.reduce((sum: number, tx: any) => sum + tx.total, 0);
  }
}
