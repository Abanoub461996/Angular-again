import { Component } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import {
  Collapse,
  Dropdown,
  initTE,
} from "tw-elements";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  cartCounter:number;
  constructor(private cartService: CartService){
  }

  ngOnInit():void{
    initTE({ Collapse, Dropdown });

    this.cartService.cartItems.subscribe(value=>{
      this.cartCounter = value;
    });
  }
  logout():void{
    console.log('logging out');
    
  }
}
