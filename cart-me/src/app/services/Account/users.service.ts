import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customers } from 'src/app/models/Customers/customers';
import { Login } from 'src/app/models/Login/login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  ApiUrl = environment.APIURL;

  constructor(private fb: FormBuilder,private http: HttpClient) { }

 
  // #######################################################################


  Register(data:Customers) {
    return this.http.post<Customers>(this.ApiUrl + '/api/Account/Register', data);
  }

  //#######################################################################
  Login(formData: Login) {
    return this.http.post(this.ApiUrl + '/api/Account/login', formData);

  }
  //#######################################################################
  LogOut() {
    return this.http.get(this.ApiUrl + '/api/Account/logout');

  }
  //#######################################################################
  EditUser(data: Customers, id:string) {
    return this.http.put(`${this.ApiUrl}/api/Account/Edit/${id}`, data);

  }
  //#######################################################################
  DeleteUser(id:string) {
    return this.http.delete(`${this.ApiUrl}/api/Account/Delete/${id}`);
  }
  //#######################################################################
  getUser() {
    return this.http.get(this.ApiUrl + '/api/Account/get' );
  }
  //#######################################################################
  getUserById(id:string){
     return this.http.get(`${this.ApiUrl}/api/Account/getUserById/${id}`);

  }
  //#######################################################################
}
