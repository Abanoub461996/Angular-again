import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { TempComponent } from './components/temp/temp.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ErrorPageComponent } from './layouts/error-page/error-page.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { LoginComponent } from './pages/auth/login/login.component';

const routes: Routes = [{ path: '', component: ProductsListComponent },
{ path: 'products/:id', pathMatch: 'full',component: ProductDetailsComponent },
{ path: 'login', pathMatch: 'full',component: LoginComponent },

{ path: '**', component:ErrorPageComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
