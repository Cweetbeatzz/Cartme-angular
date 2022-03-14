import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from 'src/app/models/Products/products';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  APIURL = environment.APIURL;
  constructor(private http: HttpClient) { }

  //#########################################################################################

  GetAllProduct(product: Products) {
    return this.http.get(this.APIURL + '/api/Food/')
  }
   //#########################################################################################

  GetProductById(product: Products) {
    return this.http.get(this.APIURL + '/api/Food/{id}')
  }
     //#########################################################################################

  GetProductByCategory(product: Products) {
    return this.http.get(this.APIURL + '/api/Food/{category}')
  }
  //#########################################################################################
  UploadProduct(product: Products) {
    return this.http.post(this.APIURL + '/api/Food/Create', product)
  }
  //#########################################################################################

  UpdateProduct(product: Products) {
    return this.http.put(this.APIURL + '/api/Food/Edit', product)
  }
  //#########################################################################################

  DeleteProduct(product: Products) {
    return this.http.delete(this.APIURL + '/api/Food/Delete')
  }
  //#########################################################################################

  SearchProduct(product: Products) {
    return this.http.get(this.APIURL + '/api/Food/search')
  }
}
