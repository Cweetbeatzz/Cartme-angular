import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/models/Categories/categories';
import { getAllCategoriesSuccessAction } from 'src/app/Ngrx/actions/category.action';
import { getCategory } from 'src/app/Ngrx/selectors/category.selector';
import { AppState } from 'src/app/Ngrx/store/app.state';
import { AlertsService } from 'src/app/services/Alerts/alerts.service';
import { CategoriesService } from 'src/app/services/Categories/categories.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  displayedColumns: string[] = ['id','name','slug','sorting', 'actions' ];
  dataSource!: MatTableDataSource<any>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  //#########################################################################################

  constructor(private store: Store<AppState>,private CategoryApi:CategoriesService,private alertify: AlertsService,) { }

//#########################################################################################

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
//#########################################################################################

  ngOnInit(): void {
    this.GetAllCategories()
  }
//#########################################################################################

  GetAllCategories() {
    this.CategoryApi.GetAllCategory().subscribe({
      next:(res)=>{
        console.log(res)
        this.dataSource = new MatTableDataSource()
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort
      },
      error:(err)=>{
        this.alertify.error(err)
      }
    })
  }
//#########################################################################################

 
}
