import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-edit-product',
  standalone: false,
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.css'
})
export class EditProduct implements OnInit {

  product: any = {};
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private productService: Product,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(this.id);
  }

  updateProduct() {
  // Trim all fields to remove accidental spaces
  this.product.name = this.product.name.trim();
  this.product.price = Number(this.product.price);
  this.product.stock = Number(this.product.stock);

  this.productService.updateProduct(this.id, this.product);
  alert('Product updated successfully!');
  this.router.navigate(['/admin']);
}

}