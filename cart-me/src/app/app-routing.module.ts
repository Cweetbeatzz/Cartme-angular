import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/account/admin/admin.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
 
    { path: 'header', component: HeaderComponent },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'search', component: SearchComponent },
    { path: 'checkout', component: CheckoutComponent},
    { path: 'cart', component: CartComponent },
    {
      path: 'categories', loadChildren:() => import('./components/category/category.module').then((x)=>
        x.CategoryModule
      )
    },
    {
      path: 'products', loadChildren:() => import('./components/product/product.module').then((x)=>
        x.ProductModule
      )
    },
    {
      path: 'users', loadChildren:() => import('./components/account/users.module').then((x)=>
        x.UserModule
      )
    },
    { path: 'admin', component: AdminComponent, },
    { path: '', component: HomeComponent },

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
