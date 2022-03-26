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

  //##################################################################

   constructor(private route: ActivatedRoute, private api:CategoriesService,private reroute:Router,
    private sweetalert:SweetalertService,private alertify:AlertsService,) { }

  //##################################################################

  ngOnInit(): void {
    //get the id of an object
    this.route.params.subscribe((data)=>{
      this.categoryId = data.id
    })
  }

  //##################################################################

  DeleteCategory() {
  if (this.categoryId) {
      this.api.DeleteCategory(this.categoryId).subscribe({
      next:(res)=>{
        this.sweetalert.timedNofication('Delete Successfull...')
        this.reroute.navigate(['/category'])
      },
      error:(err)=>{
        if (err) {
          this.alertify.error(err)
        }
        this.alertify.error('Unable to Delete!!!')
      }
    })
  }
  }
}
