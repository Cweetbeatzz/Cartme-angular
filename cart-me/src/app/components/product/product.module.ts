import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { DetailPropertiesComponent } from "./detail-properties/detail-properties.component";
import { ProductsDeleteComponent } from "./products-delete/products-delete.component";
import { ProductsEditComponent } from "./products-edit/products-edit.component";
import { ProductsComponent } from "./products/products.component";
import { ProductsuploadComponent } from "./productsupload/productsupload.component";

const routes:Routes = [
   {
    path:'',
    component:ProductsComponent,
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
      path: 'properties', component: DetailPropertiesComponent
    },
    ]
    
   }
]

@NgModule({
 declarations:[
   ProductsuploadComponent,
    ProductsEditComponent,
    ProductsDeleteComponent,
    DetailPropertiesComponent,
 ],
 imports:[CommonModule,ReactiveFormsModule, FormsModule,RouterModule.forChild(routes),]
})

export class ProductModule{}