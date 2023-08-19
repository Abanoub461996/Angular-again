import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingInterceptor } from './core/services/api/loading.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { ActionReducer, ActionReducerMap, StoreModule } from '@ngrx/store';
// SHARED MODULES
// import { CategoriesModule } from './pages/categories/categories.module';

// Components
import { AppComponent } from './app.component';
import { TempComponent } from './components/temp/temp.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ErrorPageComponent } from './layouts/error-page/error-page.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserReducer } from './core/store/user/user.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Pipes



@NgModule({
  declarations: [
    AppComponent,
    TempComponent,
    ErrorPageComponent,
    ProductDetailsComponent,
    SpinnerComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({user:UserReducer as ActionReducer<any|any>}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
