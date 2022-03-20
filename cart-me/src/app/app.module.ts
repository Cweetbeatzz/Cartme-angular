import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { StoreModule} from '@ngrx/store'
import { EffectsModule} from '@ngrx/effects'
import { StoreDevtoolsModule} from '@ngrx/store-devtools'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './material/material.module';
import { ProductsComponent } from './components/product/products/products.component';
import { CategoriesComponent } from './components/category/categories/categories.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesService } from './services/Categories/categories.service';
import { UsersService } from './services/Account/users.service';
import { ProductsService } from './services/Product/products.service';
import { environment } from 'src/environments/environment';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { AppReducer } from './Ngrx/store/app.state';
import { UsersComponent } from './components/account/users/users.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AdminComponent } from './components/account/admin/admin.component';
import { LoginComponent } from './components/account/login/login.component';
import { UserChangePasswordComponent } from './components/account/user-change-password/user-change-password.component';
import { UserDashboardComponent } from './components/account/user-dashboard/user-dashboard.component';
import { UserDeleteComponent } from './components/account/user-delete/user-delete.component';
import { UserEditComponent } from './components/account/user-edit/user-edit.component';
import { UserRolesComponent } from './components/account/user-roles/user-roles.component';
import { DetailPropertiesComponent } from './components/product/detail-properties/detail-properties.component';
import { ProductsDeleteComponent } from './components/product/products-delete/products-delete.component';
import { ProductsEditComponent } from './components/product/products-edit/products-edit.component';
import { ProductsuploadComponent } from './components/product/productsupload/productsupload.component';
import { RegisterComponent } from './components/account/register/register.component';
import { AlertsService } from './services/Alerts/alerts.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    SearchComponent,
    CheckoutComponent,
    FooterComponent,
    CategoriesComponent,
    UsersComponent,
    CartComponent,
    LoadingSpinnerComponent,
    ProductsuploadComponent,
    ProductsEditComponent,
    ProductsDeleteComponent,
    DetailPropertiesComponent,
    LoginComponent,
     AdminComponent,
     UserEditComponent,
     UserDeleteComponent,
     UserRolesComponent,
     UsersComponent,
     UserChangePasswordComponent,
     UserDashboardComponent,
     RegisterComponent
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
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({logOnly:environment.production,}),
    StoreRouterConnectingModule.forRoot()

  ],
  providers: [AlertsService,CategoriesService, UsersService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
