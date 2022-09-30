import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatTreeModule } from '@angular/material/tree';
import { Angular4PaystackModule } from 'angular4-paystack';
// import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

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
import { RegisterComponent } from './components/account/register/register.component';
import { AlertsService } from './services/Alerts/alerts.service';
import { SweetalertService } from './services/Alerts/sweetalert.service';
import { CustomSeralizer } from './Ngrx/store/router/custom.seralizer';
import { SignUpComponent } from './components/account/sign-up/sign-up.component';
import { SearchPipe } from './Pipes/search.pipe';
import { SortPipe } from './Pipes/sort.pipe';
import { HttpErrorsInterceptor } from './interceptors/http-errors.interceptor';
import { CartService } from './services/Cart/cart.service';
import { UserCreateComponent } from './components/account/user-create/user-create.component';
import { ChatsComponent } from './components/Chats/Chats.component';


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
    CartComponent,
    LoadingSpinnerComponent,
    AdminComponent,
    SearchPipe,
    SortPipe,
    UserCreateComponent, ChatsComponent


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
    MatCardModule, MatTreeModule, MatTableModule, MatFormFieldModule, MatPaginatorModule, MatSortModule,
    StoreModule.forRoot(AppReducer),
    EffectsModule.forRoot([]),
    Angular4PaystackModule.forRoot('pk_test_bb97d85a930fd37191f5491b003d5747c0ff72ec'),
    StoreDevtoolsModule.instrument({ logOnly: environment.production, }),
    StoreRouterConnectingModule.forRoot({ serializer: CustomSeralizer })

  ],
  providers: [
    // {provide:HTTP_INTERCEPTORS,useClass:HttpErrorsInterceptor,multi:true},
    SweetalertService, AlertsService, CategoriesService, UsersService, ProductsService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
