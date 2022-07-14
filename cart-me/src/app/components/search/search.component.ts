import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/Product/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchList:any
  error:any

  constructor(private router:Router,private productApi:ProductsService) { }

  //###############################################################

  ngOnInit(): void {
  }

  //###############################################################

  onSubmit(form:NgForm){
    this.router.navigate(['search',form.value.search])
  }

  //###############################################################

  searchProduct(sort:string, searchName:string){
    this.productApi.GetAllProduct().subscribe({
      next:(response)=>{
       this.searchList = response
       console.log("Response is visible")
      },
      error:(err)=>{
        this.error = err
       console.log("Error might be visible")

      },
      complete:()=>{}
    })
  }

}
