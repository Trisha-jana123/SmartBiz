import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/transaction';
import { Product } from 'src/app/product';
import { Auth } from 'src/app/auth';
import { Customer } from 'src/app/customer';

@Component({
  selector: 'app-make-sale',
  standalone: false,
  templateUrl: './make-sale.html',
  styleUrl: './make-sale.css'
})
export class MakeSale {
  selectedProductId: number = 0;
  selectedCustomerId: number = 0;
  quantity: number = 1;

  products: any[] = [];
  customers: any[] = [];

  constructor(
    private transactionService: Transaction,
    private productService: Product,
    private customerService: Customer,
    private authService: Auth,
    private router: Router
  ) {
    this.products = this.productService.getProducts();
    this.customers = this.customerService.getCustomers();
  }

  recordSale() {
  const product = this.products.find(p => p.id === +this.selectedProductId);
  const customer = this.customers.find(c => c.id === +this.selectedCustomerId);

  if (!product || !customer) {
    alert('Please select both customer and product.');
    return;
  }

  if (product.stock < this.quantity) {
    alert('Not enough stock!');
    return;
  }

  product.stock -= this.quantity;

  const transaction = {
    customerName: customer.name,
    productName: product.name,
    quantity: this.quantity,
    total: product.price * this.quantity,
    soldBy: this.authService.getCurrentUsername()
  };

  // ✅ Just this line now — everything handled inside the service
  this.transactionService.recordTransaction(transaction);
  localStorage.setItem('transactions', JSON.stringify(transaction));
  alert('Sale recorded successfully!');
  this.router.navigate(['/employee']);
}

}
