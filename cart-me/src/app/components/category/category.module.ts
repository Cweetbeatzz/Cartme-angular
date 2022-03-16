import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CategoryDeleteComponent } from "./category-delete/category-delete.component";
import { EditCategoryComponent } from "./edit-category/edit-category.component";
import { UploadCategoryComponent } from "./upload-category/upload-category.component";
import { CategoriesComponent } from "./categories/categories.component";

const routes:Routes = [
   {
    path:'',
    component:CategoriesComponent,
    children:[
    {
      path: 'uploadcategory', component: UploadCategoryComponent
    },
    {
      path: 'editcategory/:id', component: EditCategoryComponent
    },
    ]
    
   }
]

@NgModule({
 declarations:[
  CategoryDeleteComponent,
   UploadCategoryComponent,
    EditCategoryComponent,
 ],
 imports:[CommonModule,ReactiveFormsModule, FormsModule,RouterModule.forChild(routes),]
})

export class CategoryModule{}