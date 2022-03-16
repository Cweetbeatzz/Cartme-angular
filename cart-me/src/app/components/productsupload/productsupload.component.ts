import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Ngrx/store/app.state';

@Component({
  selector: 'app-productsupload',
  templateUrl: './productsupload.component.html',
  styleUrls: ['./productsupload.component.css']
})
export class ProductsuploadComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }

}
