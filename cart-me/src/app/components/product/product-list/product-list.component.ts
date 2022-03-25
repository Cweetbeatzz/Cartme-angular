import { Component, OnInit, ViewChild } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Products } from 'src/app/models/Products/products';
import { AlertsService } from 'src/app/services/Alerts/alerts.service';
import { ProductsService } from 'src/app/services/Product/products.service';
import {MatCard,MatCardActions,MatCardContent,MatCardImage,} from '@angular/material/card';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = ['id','image','mealName','chefName','description','price', 'actions' ];
  dataSource!: MatTableDataSource<Products>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  //##############################################################
  prodList!: Products[];

  constructor(private productApi:ProductsService,private alertify: AlertsService,) { }

  //##############################################################

    applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  //##############################################################

    ngOnInit(): void {
    this.getAllProducts()
    this.getAllProducts2()
  }
  //##############################################################

  getAllProducts(){
   this.productApi.GetAllProduct().subscribe({
     next:(res)=>{
       console.log(res)
        this.dataSource = new MatTableDataSource(res)
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort
     },
     error:(err)=>{
       this.alertify.error(err)
     }
   })
  }
  //##############################################################
  getAllProducts2(){
    this.productApi.GetAllProduct().subscribe({
      next:(data)=>{
        this.prodList = data
        console.log(this.prodList)
      },
      error:(err)=>{
        this.alertify.error(err)
      }
    })
  }
}
