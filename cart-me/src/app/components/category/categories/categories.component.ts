import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/models/Categories/categories';
import { getAllCategoriesSuccessAction } from 'src/app/Ngrx/actions/category.action';
import { getCategory } from 'src/app/Ngrx/selectors/category.selector';
import { AppState } from 'src/app/Ngrx/store/app.state';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Observable<Categories[]> | undefined ;
  categoriesAll: Categories[] = [];
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.categories = this.store.select(getCategory)
  }

  GetAllCategories() {
    this.store.dispatch(getAllCategoriesSuccessAction({category:this.categoriesAll}))
  }


 
}
