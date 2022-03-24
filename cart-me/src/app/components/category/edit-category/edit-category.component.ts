import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Categories } from 'src/app/models/Categories/categories';
import { updateCategorySuccessAction } from 'src/app/Ngrx/actions/category.action';
import { getCategoryById } from 'src/app/Ngrx/selectors/category.selector';
import { AppState } from 'src/app/Ngrx/store/app.state';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit,OnDestroy {

  //##################################################################

  category!:Categories
  CategoryForm!: FormGroup;
  categorySub!: Subscription;

  constructor(private reroute:Router,private route:ActivatedRoute,private store: Store<AppState>) { }

 //##################################################################

  ngOnInit(): void {
    //get the id of an object
    this.route.paramMap.subscribe((params)=>{
      const id = params.get('id')
      this.categorySub = this.store.select(getCategoryById,{id}).subscribe((data)=>{
       this.category = data
       this.validateee()
      })
    })
  }
  //##################################################################

  validateee(){
    this.CategoryForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(null,[ Validators.required,])
  });
  } 

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

  //##################################################################

  editCategory() {
   if (!this.CategoryForm.valid) {
     return
   }

    const catForm:Categories = {
     name: this.CategoryForm.value.name
    }
    this.store.dispatch(updateCategorySuccessAction({category:catForm}))
    this.reroute.navigate(['category'])
  }

  //##################################################################

  ngOnDestroy(): void {
    if (this.categorySub) {
      this.categorySub.unsubscribe()
    }
  }
}
