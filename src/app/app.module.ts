import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';
import { TempComponent } from './components/temp/temp.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductCardComponent } from './pages/products-list/product-card/product-card.component';

// Pipes
import { ShortentextPipe } from './core/pipes/shortentext.pipe';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './layouts/error-page/error-page.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TempComponent,
    ProductsListComponent,
    ProductCardComponent,
    ShortentextPipe,
    ErrorPageComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
