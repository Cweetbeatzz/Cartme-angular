import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailPropertiesComponent } from './components/detail-properties/detail-properties.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { AdminAccessGuard } from './Guard/admin-access.guard';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'register', component: RegisterComponent
    },
    {
      path: 'header', component: HeaderComponent
    },
    {
      path: 'login', component: LoginComponent
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
      path: 'properties', component: DetailPropertiesComponent
    },
    {
      path: 'cart', component: CartComponent
    },
    {
      path: 'categories', loadChildren:() => import('./components/categories/category.module').then((x)=>{
        x.CategoryModule
      })
    },
    {
      path: 'admin', component: AdminComponent, canActivate:[AdminAccessGuard]
    },
    {
      path: 'products', component: ProductsComponent
    },
 
    {
      path: '', component: HomeComponent
    },

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
