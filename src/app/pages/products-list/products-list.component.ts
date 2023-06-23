import { Component, Input, ViewChild } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product';
import { ProductCardComponent } from '../products-list/product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})

export class ProductsListComponent {
  @Input()products: Product[] = [];

 @ViewChild(ProductCardComponent) child: any;
  constructor() {}
  receiveProduct(e: any){
    // console.log(e);
    
  }
  ngAfterViewInit() {
    // console.log(this.child.product);
  }

}
