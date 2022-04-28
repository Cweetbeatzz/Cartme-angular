import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Categories } from 'src/app/models/Categories/categories';
import { AppState } from 'src/app/Ngrx/store/app.state';
import { AlertsService } from 'src/app/services/Alerts/alerts.service';
import { CategoriesService } from 'src/app/services/Categories/categories.service';
import { ProductsService } from 'src/app/services/Product/products.service';

@Component({
  selector: 'app-productsupload',
  templateUrl: './productsupload.component.html',
  styleUrls: ['./productsupload.component.css']
})
export class ProductsuploadComponent implements OnInit {

  //#########################################################################

  productForm: FormGroup = new FormGroup({});
  categoryList: Categories[] = [];
  categoryLoaded:boolean = false

  //#########################################################################

  constructor(private productApi:ProductsService,private alertify: AlertsService,private fb:FormBuilder,
    private router:Router,private categoryApi:CategoriesService) { }

  //#########################################################################

  ngOnInit(): void {
    //reset form on every load of component
    this.productForm.reset()

    //check validation
    this.productValidations()

    //seting loaded check
    this.categoryLoaded = false

    //get all categories
    this.categoryApi.GetAllCategory().subscribe({
      next:(data)=>{
        console.log(data)
        this.categoryList = data
      },
      error:(err)=>{
        console.log(err)
      }
    })

    //re setting loaded check to positive
    this.categoryLoaded = true
  }
  //#########################################################################

  productValidations(){
    this.productForm = this.fb.group({
      chefName:['',Validators.required],
      mealName:['',Validators.required],
      description:['',Validators.required],
      price:['',Validators.required],
      foodCategory:['',Validators.required],
      imageUpload:['',Validators.required],
    })
  }

  // ##########################################
  // VALIDATIONS *** VALIDATIONS *** VALIDATIONS *** VALIDATIONS *** VALIDATIONS ***

 showChefNameErrors(){
   const getChefName = this.productForm?.get('chefName');
   if (getChefName?.touched && !getChefName.valid) {
     if (getChefName.errors?.required) {
       return 'Chef Name is Required 😑'
     }
     if (getChefName.errors?.maxLength) {
       return 'Chef Name must not exceed 50 characters 😑'
     }
   }
   return
 }
   showMealNameErrors(){
   const getMealName = this.productForm?.get('mealName');
   if (getMealName?.touched && !getMealName.valid) {
     if (getMealName.errors?.required) {
       return 'Meal Name is Required 😑'
     }
     if (getMealName.errors?.maxLength) {
       return 'Meal Name must not exceed 50 characters 😑'
     }
   }
   return
 }
   showDescriptionErrors(){
   const getDescription = this.productForm?.get('description');
   if (getDescription?.touched && !getDescription.valid) {
     if (getDescription.errors?.required) {
       return 'Description is Required 😑'
     }
     if (getDescription.errors?.maxLength) {
       return 'Description must not exceed 50 characters 😑'
     }
   }
   return
 }
   showPriceErrors(){
   const getPrice = this.productForm?.get('price');
   if (getPrice?.touched && !getPrice.valid) {
     if (getPrice.errors?.required) {
       return 'Price is Required 😑'
     }
     if (getPrice.errors?.maxLength) {
       return 'Price must not exceed 50 numbers 😑'
     }
   }
   return
 }
   showFoodCategoryErrors(){
   const getFoodCategory = this.productForm?.get('foodCategory');
   if (getFoodCategory?.touched && !getFoodCategory.valid) {
     if (getFoodCategory.errors?.required) {
       return 'Food Category is Required 😑'
     }
     if (getFoodCategory.errors?.maxLength) {
       return 'Food Category must not exceed 50 characters 😑'
     }
   }
   return
 }
    showImageErrors(){
   const getImage = this.productForm?.get('imageUpload');
   if (getImage?.touched && !getImage.valid) {
     if (getImage.errors?.required) {
       return 'Image is Required 😑'
     }
   }
   return
 }


  //#########################################################################

  onSubmit(){
    this.productApi.UploadProduct(this.productForm.value).subscribe({
      next:(data)=>{
        this.alertify.success('Product Created Successfully.')
        this.productForm.reset()
        this.router.navigate(['/products'])
      },
      error:(err)=>{
        this.alertify.success(err)
      }
    })
  }

}
