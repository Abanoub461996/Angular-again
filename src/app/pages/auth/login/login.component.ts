import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {  delay, map } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/api/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthenticationService,private router:Router) {}

  ngOnInit(): void {
    
  }
  loginSubmit(loginForm: NgForm): any {
    this.authService.login(loginForm.value).pipe(
      map(data => {
        // do what you want with the request answer
        return data;
      }),
      // This will wait for 2000ms if u need to do sth with the data and delay before taking any actions
      // delay(2000)
    ).subscribe(
      data => {console.log(data)// The result of your pipeline
      localStorage.setItem('token',data.access_token);
      this.router.navigate(['/'])}
    )
  }

}
