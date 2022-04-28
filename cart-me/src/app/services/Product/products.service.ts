import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Products } from 'src/app/models/Products/products';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  APIURL = environment.APIURL;
  constructor(private http: HttpClient) { }

  //#########################################################################################

  GetAllProduct():Observable<Products[]> {
    return this.http.get<Products[]>(this.APIURL + '/api/Food/')
  }
   //#########################################################################################

  GetProductById(id:string) {
    return this.http.get(`${this.APIURL}/api/Food/${id}`)
  }
     //#########################################################################################

  GetProductByCategory(id:string) {
    return this.http.get(`${this.APIURL}/api/Food/${id}`)
  }
  //#########################################################################################
  UploadProduct(product: Products):Observable<Products> {
    return this.http.post<Products>(this.APIURL + '/api/Food/Create', product)
  }
  //#########################################################################################

  UpdateProduct(product: Products,id:string) {
    return this.http.put(this.APIURL + '/api/Food/Edit/'+id, product)
  }
  //#########################################################################################

  DeleteProduct(id:string) {
    return this.http.delete(`${this.APIURL}/api/Food/Delete${id}`)
  }
  //#########################################################################################

  SearchProduct(search: string) {
    return this.http.get(`${this.APIURL}/api/Food/${search}`)
  }
}
