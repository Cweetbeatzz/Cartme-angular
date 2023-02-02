import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { productReducer } from "src/app/Ngrx/reducers/product.reducers";
import { PRODUCT_STATE_NAME } from "src/app/Ngrx/selectors/product.selector";
import { ProductsDeleteComponent } from "./products-delete/products-delete.component";
import { ProductsEditComponent } from "./products-edit/products-edit.component";
import { ProductsuploadComponent } from "./productsupload/productsupload.component";
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatTreeModule } from '@angular/material/tree';
import { Roles } from "src/app/models/Roles/Roles";
import { AdminAccessGuard } from "src/app/Guard/admin-access.guard";



const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ProductListComponent },
      { path: 'uploadproduct', component: ProductsuploadComponent},
      { path: 'editproduct/:id', component: ProductsEditComponent, data: { role: 'Admin' } },
      { path: 'deleteproduct/:id', component: ProductsDeleteComponent, data: { role: 'Admin' } },
      { path: 'product-details/:id', component: ProductDetailsComponent, data: { role: 'Admin' } },
    ]
  },
]

@NgModule({
  declarations: [
    ProductsuploadComponent,
    ProductsEditComponent,
    ProductsDeleteComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ProductByCategoryComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule,
    FormsModule, RouterModule.forChild(routes),
    StoreModule.forFeature(PRODUCT_STATE_NAME, productReducer),
    MatCardModule, MatTreeModule, MatTableModule, MatFormFieldModule, MatPaginatorModule, MatSortModule,]
})

export class ProductModule { }