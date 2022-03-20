import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { UserDeleteComponent } from './components/account/user-delete/user-delete.component';
import { UserEditComponent } from './components/account/user-edit/user-edit.component';
import { UserRolesComponent } from './components/account/user-roles/user-roles.component';
import { UsersComponent } from './components/account/users/users.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DetailPropertiesComponent } from './components/product/detail-properties/detail-properties.component';
import { ProductsDeleteComponent } from './components/product/products-delete/products-delete.component';
import { ProductsEditComponent } from './components/product/products-edit/products-edit.component';
import { ProductsComponent } from './components/product/products/products.component';
import { ProductsuploadComponent } from './components/product/productsupload/productsupload.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
 
    {
      path: 'header', component: HeaderComponent
    },
    {
      path: 'home', component: HomeComponent
    },
    {
      path: 'contact', component: ContactComponent
    },
    {
      path: 'about', component: AboutComponent
    },
    {
      path: 'search', component: SearchComponent
    },
    {
      path: 'checkout', component: CheckoutComponent
    },
    {
      path: 'cart', component: CartComponent
    },

    // {
    //   path: 'categories', loadChildren:() => import('./components/category/category.module').then((x)=>{
    //     x.CategoryModule
    //   })
    // },
    // {
    //   path: 'products', loadChildren:() => import('./components/product/product.module').then((x)=>{
    //     x.ProductModule
    //   })
    // },
    // {
    //   path: 'users', loadChildren:() => import('./components/account/users.module').then((x)=>{
    //     x.UserModule
    //   })
    // },
    {
      path: 'login', component: LoginComponent
    },
    {
      path: 'register', component: RegisterComponent
    },
    {
      path: 'editUser', component: UserEditComponent
    },
    {
      path: 'users', component: UsersComponent
    },
    {
      path: 'deleteUser', component: UserDeleteComponent
    },
    {
      path: 'rolesUser', component: UserRolesComponent
    },
    {
      path: 'products', component: ProductsComponent
    },
    // {
    //   path: 'admin', component: AdminComponent, canActivate:[AdminAccessGuard]
    // },
    {
      path: 'uploadproduct', component: ProductsuploadComponent
    },
    {
      path: 'editproduct/:id', component: ProductsEditComponent
    },
    {
      path: 'deleteproduct/:id', component: ProductsDeleteComponent
    },
    {
      path: 'properties', component: DetailPropertiesComponent
    },
    {
      path: '', component: HomeComponent
    },

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
