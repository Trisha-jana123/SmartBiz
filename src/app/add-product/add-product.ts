import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct {

   name = '';
  price: number = 0;
  stock: number = 0;

  constructor(private productService: Product, private router: Router) {}

  addProduct() {
    const newProduct = {
      name: this.name,
      price: this.price,
      stock: this.stock
    };

    this.productService.addProduct(newProduct);
    alert('Product added successfully!');
    this.router.navigate(['/admin']);
  }
}
