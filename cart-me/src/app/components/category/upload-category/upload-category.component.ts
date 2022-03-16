import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { createCategorySuccessAction } from 'src/app/Ngrx/actions/category.action';
import { AppState } from 'src/app/Ngrx/store/app.state';

@Component({
  selector: 'app-upload-category',
  templateUrl: './upload-category.component.html',
  styleUrls: ['./upload-category.component.css']
})
export class UploadCategoryComponent implements OnInit {

  constructor(private route: Router, private http: HttpClient, private store:Store<AppState>) { }

  ngOnInit(): void {
  }

  uploadCategory() {
    this.store.dispatch(createCategorySuccessAction())
  }
}
