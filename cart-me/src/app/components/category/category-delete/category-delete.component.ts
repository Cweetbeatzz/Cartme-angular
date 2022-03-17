import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { deleteCategorySuccessAction } from 'src/app/Ngrx/actions/category.action';
import { AppState } from 'src/app/Ngrx/store/app.state';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {

  constructor(private store: Store<AppState>,private reroute:Router) { }

  ngOnInit(): void {
  }

  DeleteCategory(id:string) {
    this.store.dispatch(deleteCategorySuccessAction({id:id}));
    this.reroute.navigate(['category'])
  }
}
