import { HttpClient } from '@angular/common/http';
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
    name: ['', Validators.required]
  });
  }



  // ##########################################
// VALIDATIONS *** VALIDATIONS *** VALIDATIONS *** VALIDATIONS *** VALIDATIONS ***

 showCategoryNameErrors(){
   const getCategoryName = this.categoryForm?.get('name');
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

 // ##########################################

  uploadCategory() {
   if (!this.categoryForm?.valid) {
     return
   }
   //
   this.api.UploadCategory(this.categoryForm.value).subscribe({
     next:(res)=>{
       
       this.sweetalert.timedNofication('Created Successfully')
       this.categoryForm.reset()
       this.route.navigate(['categories'])
     },
     error:(err)=>{
      //  console.log(this.categoryForm.value)
      if (err) {
        this.alertify.error(err)
      }
      else{
        this.alertify.error('Error creating Category!!!')
      }
      
     }
   })
   
    
  }
}
