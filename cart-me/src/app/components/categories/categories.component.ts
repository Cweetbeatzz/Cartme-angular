import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/Categories/categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories = ["AFRICAN MEALS","CHINESE MEALS","AMERICAN MEALS"]
  
  constructor() { }

  ngOnInit(): void {
  }

  GetAllCategories() {

  }

  // ######################################### TYPESCRIPT CODE / NODE JS

 
}
