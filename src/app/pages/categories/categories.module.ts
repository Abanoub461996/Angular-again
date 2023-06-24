import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesLayoutComponent } from './categories-layout/categories-layout.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { CategoriesMainComponent } from './categories-main/categories-main.component';
import { HomeCatigoryComponent } from './home-catigory/home-catigory.component';
import { ShortentextPipe } from 'src/app/core/pipes/shortentext.pipe';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductCardComponent } from './products-page/product-card/product-card.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', component: CategoriesMainComponent },
      {
        path: ':id',
        pathMatch: 'full',
        component: ProductsPageComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    CategoriesLayoutComponent,
    HomeCatigoryComponent,
    ProductsPageComponent,
    NavbarComponent,
    CategoriesMainComponent,
    ProductCardComponent,
    ShortentextPipe
  ],
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports:[],
  schemas:[]
})
export class CategoriesModule {}
