import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Categories } from 'src/app/models/Categories/categories';
import { createCategorySuccessAction } from 'src/app/Ngrx/actions/category.action';
import { AppState } from 'src/app/Ngrx/store/app.state';
import { AlertsService } from 'src/app/services/Alerts/alerts.service';
import { SweetalertService } from 'src/app/services/Alerts/sweetalert.service';
import { CategoriesService } from 'src/app/services/Categories/categories.service';

@Component({
  selector: 'app-upload-category',
  templateUrl: './upload-category.component.html',
  styleUrls: ['./upload-category.component.css']
})
export class UploadCategoryComponent implements OnInit {
  // ##########################################

  categoryForm: FormGroup = new FormGroup({});
  errorInfo: string = "";

  // ##########################################

  constructor(private route: Router, private api:CategoriesService,
    private sweetalert:SweetalertService,private alertify:AlertsService,private fb:FormBuilder) { }

// ##########################################

  ngOnInit(): void {
    //reset form on every reload of page
    this.categoryForm.reset()
    //check validations
    this.categoryFormValidations()

  }
 // ##########################################

  categoryFormValidations(){
         this.categoryForm = this.fb.group({
    name: ['', (Validators.required,Validators.minLength(3),Validators.maxLength(20))]
  });
  }



  // ##########################################
// VALIDATIONS *** VALIDATIONS *** VALIDATIONS *** VALIDATIONS *** VALIDATIONS ***

 showCategoryNameErrors(){
   const getCategoryName = this.categoryForm?.get('name');
   if (getCategoryName?.touched && !getCategoryName.valid) {
     if (getCategoryName.errors?.required) {
       return 'Category Name is Required😑'
     }
     if (getCategoryName.errors?.minlength) {
       return 'Category Name must be at least 3 Characters😑'
     }
     if (getCategoryName.errors?.maxlength) {
       return 'Category Name must not exceed 20 characters😑'
     }
   }
   return
 }

 // ##########################################

  uploadCategory() {
   if (!this.categoryForm?.valid) {
     return
   }
   //
   this.api.UploadCategory(this.categoryForm.value).subscribe({
     next:(res:any)=>{
         this.sweetalert.timedNofication('Created Successfully 😊')
         this.categoryForm.reset()
         this.route.navigate(['categories'])
     },
     error:(err:any)=>{
       if (err instanceof HttpErrorResponse) {
          const errmsg = new Array<{Name:string; errors:string}>()

         if (err.status === 400) {
          //  forEach(element => {
             
          //  });
           this.alertify.error(this.errorInfo = err.message)
          //  this.alertify.error('Category name must be at least 5 Characters!!! 😑')
         }
       }
        
     }
   })
   
    
  }
}
