import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/models/Categories/categories';
import { getAllCategoriesSuccessAction } from 'src/app/Ngrx/actions/category.action';
import { getCategory } from 'src/app/Ngrx/selectors/category.selector';
import { AppState } from 'src/app/Ngrx/store/app.state';
import { AlertsService } from 'src/app/services/Alerts/alerts.service';
import { CategoriesService } from 'src/app/services/Categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Observable<Categories[]> | undefined ;
  categoriesAll: Categories[] = [];
  
  constructor(private store: Store<AppState>,private CategoryApi:CategoriesService,private alertify: AlertsService,) { }

  ngOnInit(): void {
    // this.categories = this.store.select(getCategory)
    this.GetAllCategories()
  }

  GetAllCategories() {
    // this.store.dispatch(getAllCategoriesSuccessAction({category:this.categoriesAll}))
    this.CategoryApi.GetAllCategory().subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        this.alertify.error(err)
      }
    })
  }


 
}
