import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  ApiUrl = environment.APIURL;

  constructor(private http: HttpClient) { }

   //#######################################################################
  DeleteRole(id:string) {
    return this.http.delete(`${this.ApiUrl}/api/Account/Roles/Delete/${id}`);

  }
  //#######################################################################
  getRoles() {
    return this.http.get(this.ApiUrl + '/api/Account/Roles/get' );
  }
    //#######################################################################
  getRolesById(id:string) {
    return this.http.delete(`${this.ApiUrl}/api/Account/Roles/get/${id}`);

  }
  //#######################################################################
  createRole() {
    return this.http.get(this.ApiUrl + '/api/Account/Roles/create' );
  }
  //#######################################################################
  assignRole() {
    return this.http.get(this.ApiUrl + '/api/Account/Roles/assign' );
  }
}
