import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Categories } from 'src/app/models/Categories/categories';
import { getAllCategoriesSuccessAction } from 'src/app/Ngrx/actions/category.action';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories = ["AFRICAN MEALS","CHINESE MEALS","AMERICAN MEALS"]
  
  constructor(private store: Store<{categories:{categories:Categories}}>) { }

  ngOnInit(): void {
  }

  GetAllCategories() {
    this.store.dispatch(getAllCategoriesSuccessAction())
  }

  // ######################################### TYPESCRIPT CODE / NODE JS

 
}
