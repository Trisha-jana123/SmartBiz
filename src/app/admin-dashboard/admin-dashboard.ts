import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/customer';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.html',
  standalone: false,
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboard implements OnInit {
  totalCustomers = 0;
  totalProducts = 0;
  totalSales = 0;

  customers: any[] = [];
  products: any[] = [];

  constructor(
    private customer: Customer,
    private product: Product,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.customers = this.customer.getCustomers();
    this.totalCustomers = this.customers.length;

    this.products = this.product.getProducts();
    this.totalProducts = this.products.length;

    const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
    this.totalSales = transactions.reduce((sum: number, tx: any) => sum + tx.total, 0);
  }

  navigateToAddCustomer() {
    this.router.navigate(['/add-customer']);
  }

  navigateToAddProduct() {
    this.router.navigate(['/add-product']);
  }

  navigateToReports() {
    this.router.navigate(['/reports']);
  }

  editCustomer(cust: any) {
    this.router.navigate(['/edit-customer', cust.id]);
  }

  deleteCustomer(id: number) {
    this.customer.deleteCustomer(id);
    this.loadData();
  }

  editProduct(prod: any) {
    this.router.navigate(['/edit-product', prod.id]);
  }

  deleteProduct(id: number) {
    this.product.deleteProduct(id);
    this.loadData();
  }

  logout() {
  localStorage.removeItem('currentUser');
  this.router.navigate(['/login']);
}

}