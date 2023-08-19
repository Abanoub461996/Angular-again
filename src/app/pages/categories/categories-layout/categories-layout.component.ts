import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/api/auth/authentication.service';
import { map } from 'rxjs';
import { SetUserAction } from 'src/app/core/store/user/user.action';
import { Store } from '@ngrx/store';
import { userStore } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-categories-layout',
  templateUrl: './categories-layout.component.html',
  styleUrls: ['./categories-layout.component.css'],
})
export class CategoriesLayoutComponent {
  userData: userStore;
  constructor() {}

  ngOnInit(): void {
    
  }
}
