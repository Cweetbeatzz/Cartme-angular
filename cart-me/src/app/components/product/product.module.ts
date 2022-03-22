import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { productReducer } from "src/app/Ngrx/reducers/product.reducers";
import { PRODUCT_STATE_NAME } from "src/app/Ngrx/selectors/product.selector";
import { ProductsDeleteComponent } from "./products-delete/products-delete.component";
import { ProductsEditComponent } from "./products-edit/products-edit.component";
import { ProductsComponent } from "./products/products.component";
import { ProductsuploadComponent } from "./productsupload/productsupload.component";
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes:Routes = [
   {
    path:'',component:ProductsComponent,

    children:[
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
      path: 'product-details/:id', component: ProductDetailsComponent
    },
    ]
   }
]

@NgModule({
 declarations:[
    // ProductsuploadComponent,
    // ProductsEditComponent,
    // ProductsDeleteComponent,
    // DetailPropertiesComponent,
    // ProductDetailsComponent
  ],
 imports:[CommonModule,ReactiveFormsModule, 
  FormsModule,RouterModule.forChild(routes),
  StoreModule.forFeature(PRODUCT_STATE_NAME,productReducer)]
})

export class ProductModule{}