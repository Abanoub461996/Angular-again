import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Product, productInitialization } from 'src/app/core/interfaces/product';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product: Product;
  @Output() sendProduct = new EventEmitter();
  constructor(private router:Router,private cartService:CartService) {
    this.product = productInitialization;
  }
  ngOnInit() {
  }
  showDetails(){
    this.router.navigate([`/products/${this.product.id}`]);
  }
  addToCart(e:any):void{
    e.stopPropagation();
    this.cartService.increaseItems();
  }
}
