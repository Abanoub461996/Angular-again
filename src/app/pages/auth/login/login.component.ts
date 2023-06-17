import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/api/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthenticationService,private router:Router) {}

  loginSubmit(loginForm: NgForm): any {
    this.authService.login(loginForm.value).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem('token',res.access_token);
        this.router.navigate(['/'])
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
