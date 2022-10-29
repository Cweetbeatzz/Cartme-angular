import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/Product/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchList: any
  error: any
  searchValue: EventEmitter<any> = new EventEmitter<any>()
  constructor(private router: Router, private productApi: ProductsService) { }

  //###############################################################

  ngOnInit(): void {
  }

  //###############################################################

  onSubmit(form: NgForm) {
    const output = this.searchValue.emit(this.searchList)
    this.router.navigate(['search', form.value.search])
  }

  //###############################################################

  searchProduct(searchName: string, sort?: string) {
    this.productApi.SearchProduct(searchName).subscribe({
      next: (response) => {
        this.searchList = response
        console.log("Response is visible", response)
      },
      error: (err) => {
        this.error = err
        console.log("Error might be visible", err)

      },
      complete: () => { }
    })
  }

}
