import { Component, Input } from '@angular/core';
import { Product } from '../../products-list/products-list.component';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product: Product;
  constructor() {
    this.product = {
      id: 0,
      title: '',
      price: 0,
      description: '',
      images: [],
      creationAt: 'string',
      updatedAt: 'string',
      category: {
        id: 0,
        name: 'string',
        image: 'string',
        creationAt: 'string',
        updatedAt: 'string',
      },
    };
  }
  ngOnInit() {
    console.log(this.product);
  }
}
