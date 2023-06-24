import { Component } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { Store } from '@ngrx/store';




import {
  Collapse,
  Dropdown,
  initTE,
} from "tw-elements";
import { userStore } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  cartCounter:number;
  userData:userStore;
  constructor(private cartService: CartService,private store:Store<any>){
  }

  ngOnInit():void{
    initTE({ Collapse, Dropdown });

    this.cartService.cartItems.subscribe(value=>{
      this.cartCounter = value;
    });
    this.store.select('user').subscribe(value=>{
      this.userData= value;
    })
  }
  logout():void{
    console.log('logging out');
    
  }
}
