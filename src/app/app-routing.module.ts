import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ErrorPageComponent } from './layouts/error-page/error-page.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'categories'},
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module').then((m) => m.CategoriesModule),
  },
  {
    path: 'products/:id',
    pathMatch: 'full',
    component: ProductDetailsComponent,
  },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'register', pathMatch: 'full', component: RegisterComponent },

  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
