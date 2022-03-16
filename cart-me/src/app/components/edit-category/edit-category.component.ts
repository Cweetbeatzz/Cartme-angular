import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Categories } from 'src/app/models/Categories/categories';
import { updateCategorySuccessAction } from 'src/app/Ngrx/actions/category.action';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(private store: Store<{categories:{categories:Categories}}>) { }

  ngOnInit(): void {
  }

  editCategory() {
    this.store.dispatch(updateCategorySuccessAction())
  }
}
