import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  productId: number = 0;
  selectedProduct: any;

  constructor(
    private productServive: ProductService,
    private route: ActivatedRoute
  ){

  }

  ngOnInit(): void{
    this.productId = +this.route.snapshot.paramMap.get('id')!;
    this.selectedProduct = this.productServive.getProducts().find(p => 
      p.id === this.productId)
  }
}
