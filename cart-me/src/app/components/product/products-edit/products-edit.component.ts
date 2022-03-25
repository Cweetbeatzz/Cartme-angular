import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Products } from 'src/app/models/Products/products';
import { AppState } from 'src/app/Ngrx/store/app.state';
import { AlertsService } from 'src/app/services/Alerts/alerts.service';
import { ProductsService } from 'src/app/services/Product/products.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  //#########################################################################################

  productSubscription: Subscription = new Subscription;
  prodId!: string;
  prodDetails: any;
  productEditForm!: FormGroup;
  dataLoaded:boolean = false

  //#########################################################################################

  constructor(private route:Router,private store:Store<AppState>, private router:ActivatedRoute,
    private productApi:ProductsService,private alertify: AlertsService,private fb:FormBuilder,) { }

  //#########################################################################################

  ngOnInit(): void {
    //
    this.dataLoaded = false
    //
      this.router.params.subscribe(data =>{
      this.prodId = data.id
    })

      //get product details to edit
    if (this.prodId !== null){
      this.productApi.GetProductById(this.prodId).toPromise()
      .then(data=>{
        this.prodDetails = data
        Object.assign(this.prodDetails,data)

        // pe-fill product form
        this.productEditForm = this.fb.group({
          ChefName: new FormControl(this.prodDetails.ChefName),
          MealName: new FormControl(this.prodDetails.MealName),
          Description: new FormControl(this.prodDetails.Description),
          Price: new FormControl(this.prodDetails.Price),
          FoodCategory: new FormControl(this.prodDetails.FoodCategory),
          ImageUpload: new FormControl(this.prodDetails.ImageUpload),
        })
        //
        this.dataLoaded = true
      })
      .catch(err =>{
        this.alertify.error(err)
      })
    }
  }

     //#########################################################################################
  // VALIDATIONS *** VALIDATIONS *** VALIDATIONS *** VALIDATIONS *** VALIDATIONS ***

  showChefNameErrors(){
   const getChefName = this.productEditForm?.get('ChefName');
   if (getChefName?.touched && !getChefName.valid) {
     if (getChefName.errors?.required) {
       return 'Chef Name is Required'
     }
     if (getChefName.errors?.maxLength) {
       return 'Chef Name must not exceed 50 characters'
     }
   }
   return
 }
   showMealNameErrors(){
   const getMealName = this.productEditForm?.get('MealName');
   if (getMealName?.touched && !getMealName.valid) {
     if (getMealName.errors?.required) {
       return 'Meal Name is Required'
     }
     if (getMealName.errors?.maxLength) {
       return 'Meal Name must not exceed 50 characters'
     }
   }
   return
 }
   showDescriptionErrors(){
   const getDescription = this.productEditForm?.get('Description');
   if (getDescription?.touched && !getDescription.valid) {
     if (getDescription.errors?.required) {
       return 'getDescription is Required'
     }
     if (getDescription.errors?.maxLength) {
       return 'getDescription must not exceed 50 characters'
     }
   }
   return
 }
   showPriceErrors(){
   const getPrice = this.productEditForm?.get('Price');
   if (getPrice?.touched && !getPrice.valid) {
     if (getPrice.errors?.required) {
       return 'Price is Required'
     }
     if (getPrice.errors?.maxLength) {
       return 'Price must not exceed 50 numbers'
     }
   }
   return
 }
   showFoodCategoryErrors(){
   const getFoodCategory = this.productEditForm?.get('FoodCategory');
   if (getFoodCategory?.touched && !getFoodCategory.valid) {
     if (getFoodCategory.errors?.required) {
       return 'Food Category is Required'
     }
     if (getFoodCategory.errors?.maxLength) {
       return 'Food Category must not exceed 50 characters'
     }
   }
   return
 }
    showImageErrors(){
   const getImage = this.productEditForm?.get('Image');
   if (getImage?.touched && !getImage.valid) {
     if (getImage.errors?.required) {
       return 'Image is Required'
     }
   }
   return
 }
  //#########################################################################################

  onSubmit(){
        this.productApi.UpdateProduct(this.productEditForm.value,this.prodId).subscribe({
      next:()=>{
        this.alertify.success('Product Updated Successfully.')
        this.productEditForm.reset()
        this.route.navigate(['/products'])
      },
      error:(err)=>{
        this.alertify.error('Unable to Edit!!!')
      }
    })
  }


}
