import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ErrorPageComponent } from './layouts/error-page/error-page.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { authGuard } from './core/authguard/authguard.guard';
import { authRoutes } from './pages/auth/auth-routing.module';
import { CategoriesMainComponent } from './pages/categories/categories-main/categories-main.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesMainComponent,
    children: [
      {
        path: 'categories',
        canActivate: [authGuard],
        loadChildren: () =>
          import('./pages/categories/categories.module').then(
            (m) => m.CategoriesModule
          ),
      },
      {
        path: 'products/:id',
        pathMatch: 'full',
        component: ProductDetailsComponent,
      },
    ],
  },
  ...authRoutes,

  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
