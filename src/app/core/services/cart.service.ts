import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartCounter = new BehaviorSubject<number>(0);
  cartItems = this.cartCounter.asObservable();
  constructor() {}

  get cart(): BehaviorSubject<number> {
    return this.cartCounter;
  }
  updateCart(value: number): void {
    this.cartCounter.next(value);
  }
  increaseItems(): void {
    this.updateCart(this.cart.value+1);
  }
}
