import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Categories } from 'src/app/models/Categories/categories';
import { deleteCategorySuccessAction } from 'src/app/Ngrx/actions/categoryAction';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {

  constructor(private store: Store<{categories:{categories:Categories}}>) { }

  ngOnInit(): void {
  }

  DeleteCategories() {
    this.store.dispatch(deleteCategorySuccessAction())
  }
}
