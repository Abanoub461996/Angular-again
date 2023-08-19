import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Components
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const authRoutes: Routes = [
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'register', pathMatch: 'full', component: RegisterComponent },
];

