import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {StoreModule} from '@ngrx/store'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailPropertiesComponent } from './components/detail-properties/detail-properties.component';
import { MaterialModule } from './material/material.module';
import { AdminComponent } from './components/admin/admin.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CartComponent } from './components/cart/cart.component';
import { UploadCategoryComponent } from './components/categories/upload-category/upload-category.component';
import { CategoriesService } from './services/Categories/categories.service';
import { EditCategoryComponent } from './components/categories/edit-category/edit-category.component';
import { UsersService } from './services/Account/users.service';
import { ProductsuploadComponent } from './components/productsupload/productsupload.component';
import { ProductsEditComponent } from './components/products-edit/products-edit.component';
import { ProductsDeleteComponent } from './components/products-delete/products-delete.component';
import { ProductsService } from './services/Product/products.service';
import { AdminAccessGuard } from './Guard/admin-access.guard';
import {userReducer} from '../app/Ngrx/reducers/userReducers';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    SearchComponent,
    CheckoutComponent,
    FooterComponent,
    DetailPropertiesComponent,
    AdminComponent,
    ProductsComponent,
    CategoriesComponent,
    CartComponent,
    UploadCategoryComponent,
    EditCategoryComponent,
    ProductsuploadComponent,
    ProductsEditComponent,
    ProductsDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    ModalModule.forRoot(),
    MaterialModule,
    RouterModule, HttpClientModule,
    StoreModule.forRoot({user:userReducer}),

  ],
  providers: [CategoriesService, UsersService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
