import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { TempComponent } from './components/temp/temp.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ErrorPageComponent } from './layouts/error-page/error-page.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { CategoriesComponent } from './pages/categories/categories.component';

const routes: Routes = [{ path: '', component: CategoriesComponent },
{ path: 'products', pathMatch: 'full',component: ProductsPageComponent },
{ path: 'categories/:id', pathMatch: 'full',component: ProductsPageComponent },
{ path: 'products/:id', pathMatch: 'full',component: ProductDetailsComponent },
{ path: 'login', pathMatch: 'full',component: LoginComponent },
{ path: 'register', pathMatch: 'full',component: RegisterComponent },

{ path: '**', component:ErrorPageComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
