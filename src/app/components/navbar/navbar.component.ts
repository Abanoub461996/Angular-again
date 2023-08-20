import { Component } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { Store } from '@ngrx/store';

import { Collapse, Dropdown, initTE } from 'tw-elements';
import { userStore } from 'src/app/core/interfaces/user';
import { AuthenticationService } from 'src/app/core/services/api/auth/authentication.service';
import { map } from 'rxjs';
import { SetUserAction } from 'src/app/core/store/user/user.action';
import { userInit } from 'src/app/core/store/user/user.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  cartCounter!: number;
  userData: userStore = userInit;

  constructor(
    private cartService: CartService,
    private store: Store<any>,
    private authService: AuthenticationService
  ) {
    this.store.select('user').subscribe((value) => {
      if (value.id) {
        this.userData = value;
      } else {
        this.authService
          .authToken()
          .pipe(
            map((data) => {
              this.userData = data;
              return data;
            })
          )
          .subscribe((value) => this.store.dispatch(new SetUserAction(value)));
      }
    });
  }

  ngOnInit(): void {
    initTE({ Collapse, Dropdown });
  }
  logout(): void {
    console.log('logging out');
  }
}
