import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Roles } from 'src/app/models/Customers/roles';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  ApiUrl = environment.APIURL;

  constructor(private http: HttpClient) { }

   //#######################################################################
  DeleteRole(id:string) {
    return this.http.delete(`${this.ApiUrl}/api/Roles/Delete/${id}`);
  }
  //#######################################################################
  getRoles():Observable<Roles[]> {
    return this.http.get<Roles[]>(this.ApiUrl + '/api/Roles' );
  }
    //#######################################################################
  getRolesById(id:string) {
    return this.http.get(`${this.ApiUrl}/api/Roles/${id}`);

  }
  //#######################################################################
  createRole(role:Roles) {
    return this.http.post(this.ApiUrl + '/api/Roles/create',role );
  }
  //#######################################################################
  updateRole(role:Roles, id:string) {
    return this.http.put(`${this.ApiUrl}/api/Roles/Edit/${id}`, role);
  }
}
