import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorPageComponent } from './layouts/error-page/error-page.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
// Components
import { AppComponent } from './app.component';
import { TempComponent } from './components/temp/temp.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductCardComponent } from './pages/products-list/product-card/product-card.component';
import { AppRoutingModule } from './app-routing.module';

// Pipes
import { ShortentextPipe } from './core/pipes/shortentext.pipe';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    TempComponent,
    ProductsListComponent,
    ProductCardComponent,
    ShortentextPipe,
    ErrorPageComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
