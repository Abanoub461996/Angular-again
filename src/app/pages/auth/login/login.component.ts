import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { delay, map } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/api/auth/authentication.service';
import { SetUserAction } from 'src/app/core/store/user/user.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone:true,
  imports:[FormsModule,CommonModule],
  providers:[AuthenticationService,Router,Store]

})
export class LoginComponent {
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {}
  loginSubmit(loginForm: NgForm): any {
    this.authService
      .login(loginForm.value)
      .pipe(
        map((data) => {
          // do what you want with the request answer
          localStorage.setItem('token', data.access_token);
          return data;
        })
      )
      .subscribe((data) => {
        this.authService.authToken().pipe(
          map((data) => {
            this.store.dispatch(new SetUserAction(data));
            return data;
          })
        );
        this.router.navigate(['/']);
      });
  }
}
