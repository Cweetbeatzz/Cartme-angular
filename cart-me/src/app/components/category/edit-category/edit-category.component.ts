import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Categories } from 'src/app/models/Categories/categories';
import { updateCategorySuccessAction } from 'src/app/Ngrx/actions/category.action';
import { getCategoryById } from 'src/app/Ngrx/selectors/category.selector';
import { AppState } from 'src/app/Ngrx/store/app.state';
import { AlertsService } from 'src/app/services/Alerts/alerts.service';
import { SweetalertService } from 'src/app/services/Alerts/sweetalert.service';
import { CategoriesService } from 'src/app/services/Categories/categories.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  //##################################################################

  categoryId!: string;
  categoryDetail:any
  categoryEditForm!: FormGroup;
  dataLoaded:boolean = false

  constructor(private route: ActivatedRoute, private api:CategoriesService,private reroute:Router,
    private sweetalert:SweetalertService,private alertify:AlertsService,private fb:FormBuilder) { }

 //##################################################################

  ngOnInit(): void {
    //get the id of an object
    this.route.params.subscribe((data)=>{
      this.categoryId = data.id
    })

    //get product details to edit
    if (this.categoryId !== null) {
      this.api.GetCategoryById(this.categoryId).toPromise().then(data =>{
        this.categoryDetail = data
        Object.assign(this.categoryDetail,data)

    // pre-filling form
    this.categoryEditForm = this.fb.group({
      name: new FormControl(this.categoryDetail.name)
    })

    this.dataLoaded = true

    }).catch(err=>{
      this.alertify.error(err)
    })
    }
  }
  //##################################################################



  // ##########################################
// VALIDATIONS *** VALIDATIONS *** VALIDATIONS *** VALIDATIONS *** VALIDATIONS ***

 showCategoryNameErrors(){
   const getCategoryName = this.categoryEditForm?.get('name');
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
   if (!this.categoryEditForm.valid) {
     return
   }
      this.api.UpdateCategory(this.categoryEditForm.value,this.categoryId).subscribe({
      next:()=>{
        this.sweetalert.timedNofication('Category Updated Successfully.')
        this.categoryEditForm.reset()
        this.reroute.navigate(['/categories'])
      },
      error:(err)=>{
        if (err) {
          this.alertify.error(err)
        }
        else{
          this.alertify.error('Unable to Edit!!!')
        }
      }
    })
  }

  //##################################################################

}
