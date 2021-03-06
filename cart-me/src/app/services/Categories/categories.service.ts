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
    return this.http.get<Categories[]>(this.APIURL + '/api/Categories/')
  }
  //#########################################################################################
  UploadCategory(category: Categories):Observable<Categories>{
    return this.http.post<Categories>(this.APIURL + '/api/Categories/Create', category)
  }
  //#########################################################################################

  UpdateCategory(category: Categories, id:string) {
    return this.http.put(`${this.APIURL}/api/Categories/Edit/${id}`, category)
  }
  //#########################################################################################

  DeleteCategory(id: string) {
    return this.http.delete(`${this.APIURL}/api/Categories/Delete/${id}`)
  }
  //#########################################################################################
  GetCategoryById(id: any) {
    return this.http.get(`${this.APIURL}/api/Categories/${id}`)
  }
  //#########################################################################################
}
