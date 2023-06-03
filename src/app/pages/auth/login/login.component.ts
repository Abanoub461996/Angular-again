import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private email: string='';
   private password: string='';
  constructor() {}

  loginSubmit(loginForm:NgForm):void {
    console.log('loginForm',loginForm.form.value);
  }
  logmail(mail:any):void {
    console.log({mail});
  }
}
