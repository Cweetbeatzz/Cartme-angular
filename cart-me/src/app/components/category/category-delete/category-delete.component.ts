import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { deleteCategorySuccessAction } from 'src/app/Ngrx/actions/category.action';
import { AppState } from 'src/app/Ngrx/store/app.state';
import { AlertsService } from 'src/app/services/Alerts/alerts.service';
import { SweetalertService } from 'src/app/services/Alerts/sweetalert.service';
import { CategoriesService } from 'src/app/services/Categories/categories.service';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
  //##################################################################

  categoryId: string = '';
  categoryDetails:any
  dataLoaded:boolean = false

  //##################################################################

   constructor(private route: ActivatedRoute, private api:CategoriesService,private reroute:Router,
    private sweetalert:SweetalertService,private alertify:AlertsService,) { }

  //##################################################################

  ngOnInit(): void {
      //
    this.dataLoaded = false
    //get the id of an object
    this.route.params.subscribe((dataId)=>{
    this.categoryId = dataId.id 
    })

    if (this.categoryId) {
      this.api.GetCategoryById(this.categoryId).toPromise().then(data =>{
       this.categoryDetails = data 
        Object.assign(this.categoryDetails, data)

      }).catch(err =>{
        console.log(err);
        
      })
      this.dataLoaded = true
    }
  }
  
  //##################################################################

  DeleteCategory() {
     if (this.categoryId) {
      this.api.DeleteCategory(this.categoryId).subscribe({
      next:(res)=>{
        this.sweetalert.timedNofication('Delete Successfull...😊')
        this.reroute.navigate(['/categories'])

        
      },
      error:(err)=>{
        
        if (err) {
          this.alertify.error(err)
        }
        this.alertify.error('Unable to Delete!!! 😢')
      }
    })
  }
  }
}
