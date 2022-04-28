import { Component, OnInit, ViewChild } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Products } from 'src/app/models/Products/products';
import { AlertsService } from 'src/app/services/Alerts/alerts.service';
import { ProductsService } from 'src/app/services/Product/products.service';
import {MatCard,MatCardActions,MatCardContent,MatCardImage,} from '@angular/material/card';
import { CartService } from 'src/app/services/Cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = ['id','image','mealName','chefName','description','price', 'actions' ];
  dataSource!: MatTableDataSource<Products>;
  dataLoaded:boolean = false
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  //##############################################################

  prodList: Products[] = [];

  constructor(private productApi:ProductsService,private alertify: AlertsService,private cartApi:CartService) { }

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
    this.dataLoaded = false
    this.productApi.GetAllProduct().subscribe({
      //
      next:(data)=>{
        console.log(data)
        this.prodList = data
        
        //
        // this.prodList.forEach((a:any )=> {
        //   Object.assign(a,{quantity:1,total:a.price})
        // });
      },
      error:(err)=>{
        this.alertify.error(err)
      }
    })
    this.dataLoaded = true
  }

  //##############################################################

  addProductToCart(item:any){
    this.cartApi.addToCart(item)
  }
}
