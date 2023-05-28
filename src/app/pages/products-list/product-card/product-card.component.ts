import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Product, productInitialization } from 'src/app/core/interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product: Product;
  @Output() sendProduct = new EventEmitter();
  constructor(private router:Router) {
    this.product = productInitialization;
  }
  ngOnInit() {
  }
  showDetails(){
    this.router.navigate([`/products/${this.product.id}`]);
  }
}
