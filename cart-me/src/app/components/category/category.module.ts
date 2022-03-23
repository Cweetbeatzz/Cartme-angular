import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CategoryDeleteComponent } from "./category-delete/category-delete.component";
import { EditCategoryComponent } from "./edit-category/edit-category.component";
import { UploadCategoryComponent } from "./upload-category/upload-category.component";
import { CategoriesComponent } from "./categories/categories.component";
import { StoreModule } from "@ngrx/store";
import { categoryReducer } from "src/app/Ngrx/reducers/category.reducers";
import { CATEGORY_STATE_NAME } from "src/app/Ngrx/selectors/category.selector";

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
    {
      path: 'deletecategory/:id', component: CategoryDeleteComponent
    },
    ]
    
   }
]

@NgModule({
 declarations:[
  // CategoryDeleteComponent,
  //  UploadCategoryComponent,
  //   EditCategoryComponent,
 ],
 imports:[CommonModule,ReactiveFormsModule, 
  FormsModule,RouterModule.forChild(routes),StoreModule.forFeature(CATEGORY_STATE_NAME,categoryReducer)]
})

export class CategoryModule{}