import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { Auth } from 'src/app/auth';

@Component({
  selector: 'app-view-products',
  standalone: false,
  templateUrl: './view-products.html',
  styleUrl: './view-products.css'
})
export class ViewProducts implements OnInit {
  products: any[] = [];
  userRole: string = '';

  constructor(
    private productService: Product,
    private authService: Auth,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.userRole = this.authService.getRole();
  }

  editProduct(product: any) {
    this.router.navigate(['/edit-product', product.id]);
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts(); // Refresh
  }
}
