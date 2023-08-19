import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-auth-parent',
  standalone: true,
  imports: [
    CommonModule,
    LoginComponent,
    RegisterComponent,
    RouterOutlet,
  ],
  providers: [],
  templateUrl: './auth-parent.component.html',
  styleUrls: ['./auth-parent.component.css'],
})
export class AuthParentComponent {}
