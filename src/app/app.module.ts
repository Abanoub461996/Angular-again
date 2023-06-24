import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingInterceptor } from './core/services/api/loading.interceptor';

// SHARED MODULES
import { CategoriesModule } from './pages/categories/categories.module';

// Components
import { AppComponent } from './app.component';
import { TempComponent } from './components/temp/temp.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ErrorPageComponent } from './layouts/error-page/error-page.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
// Pipes
import { ShortentextPipe } from './core/pipes/shortentext.pipe';



@NgModule({
  declarations: [
    AppComponent,
    TempComponent,
    ShortentextPipe,
    ErrorPageComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegisterComponent,
    SpinnerComponent,
    SidebarComponent,
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
