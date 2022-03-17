import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Categories } from 'src/app/models/Categories/categories';
import { createCategorySuccessAction } from 'src/app/Ngrx/actions/category.action';
import { AppState } from 'src/app/Ngrx/store/app.state';

@Component({
  selector: 'app-upload-category',
  templateUrl: './upload-category.component.html',
  styleUrls: ['./upload-category.component.css']
})
export class UploadCategoryComponent implements OnInit {
 

  constructor(private route: Router, private store:Store<AppState>) { }

  ngOnInit(): void {
  }

  CategoryForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(null,[ Validators.required, Validators.maxLength(50)])
  });

  // ##########################################
// VALIDATIONS *** VALIDATIONS *** VALIDATIONS *** VALIDATIONS *** VALIDATIONS ***

 showCategoryNameErrors(){
   const getCategoryName = this.CategoryForm?.get('name');
   if (getCategoryName?.touched && !getCategoryName.valid) {
     if (getCategoryName.errors?.required) {
       return 'Category Name is Required'
     }
     if (getCategoryName.errors?.maxLength) {
       return 'Category Name must not exceed 50 characters'
     }
   }
   return
 }
  uploadCategory() {
   if (!this.CategoryForm?.valid) {
     return
   }

    const catForm:Categories = {
     name: this.CategoryForm.value.name
    }
    this.store.dispatch(createCategorySuccessAction({category:catForm}))
  }
}
