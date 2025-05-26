import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  products: any[] = [];

  constructor(private productService: ProductService){
    this.products = this.productService.getProducts();
  }

  buyNow(){
    // alert(`Buy this ${this.product.name} now!`);
  }
}
