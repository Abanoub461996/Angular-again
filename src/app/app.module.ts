import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorPageComponent } from './layouts/error-page/error-page.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoadingInterceptor } from './core/services/api/loading.interceptor';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HomeCatigoryComponent } from './pages/categories/home-catigory/home-catigory.component';


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
    RegisterComponent,
    NavbarComponent,
    SpinnerComponent,
    SidebarComponent,
    ProductsPageComponent,
    CategoriesComponent,
    HomeCatigoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
