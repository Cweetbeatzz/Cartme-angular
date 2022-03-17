import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories } from 'src/app/models/Categories/categories';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  APIURL = environment.APIURL;
  constructor(private http: HttpClient) { }

  //#########################################################################################

  GetAllCategory() {
    return this.http.get(this.APIURL + '/api/Categories/')
  }
  //#########################################################################################
  UploadCategory(category: Categories) {
    return this.http.post(this.APIURL + '/api/Categories/Create', category)
  }
  //#########################################################################################

  UpdateCategory(category: Categories) {
    return this.http.put(this.APIURL + '/api/Categories/Edit/{id}', category)
  }
  //#########################################################################################

  DeleteCategory(category: Categories) {
    return this.http.delete(this.APIURL + '/api/Categories/Delete/{id}')
  }
  //#########################################################################################
  GetCategoryById(id: string) {
    return this.http.get(this.APIURL + '/api/Categories/get/{id}')
  }
  //#########################################################################################
}
