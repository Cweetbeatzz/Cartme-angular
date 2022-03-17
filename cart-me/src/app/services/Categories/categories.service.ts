import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Categories } from 'src/app/models/Categories/categories';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  APIURL = environment.APIURL;
  constructor(private http: HttpClient) { }

  //#########################################################################################

  GetAllCategory():Observable<Categories[]> {
    return this.http.get(this.APIURL + '/api/Categories/').pipe(map((data)=>{
      const categories:Categories[] = [];
      return categories
    }))
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

  DeleteCategory(id: string) {
    return this.http.delete(`${this.APIURL}/api/Categories/Delete/${id}`)
  }
  //#########################################################################################
  GetCategoryById(id: string) {
    return this.http.get(`${this.APIURL}/api/Categories/get/${id}`)
  }
  //#########################################################################################
}
