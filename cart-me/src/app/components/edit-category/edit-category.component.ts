import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateCategorySuccessAction } from 'src/app/Ngrx/actions/category.action';
import { AppState } from 'src/app/Ngrx/store/app.state';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  editCategory() {
    this.store.dispatch(updateCategorySuccessAction())
  }
}
