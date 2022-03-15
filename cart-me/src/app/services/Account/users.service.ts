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

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  formModel = this.fb.group({
    Firstname: ['', Validators.required],
    Lastname: ['', Validators.required],
    Username: ['', Validators.required],
    Email: ['', Validators.email],
    Address: ['', Validators.required],
    State: ['', Validators.required],
    Country: ['', Validators.required],
    Phone: ['', Validators.required],
    PostalCode: ['', Validators.required],


    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', Validators.required]
    }, { Validators: this.comparePasswords })
  });

  comparePasswords(fb: FormGroup) {
    let comfrimpassctrl = fb.get('ConfirmPassword')
    if (comfrimpassctrl?.errors == null || 'passwordMisMatch' in comfrimpassctrl.errors) {
      if (fb.get('Password')?.value != comfrimpassctrl?.value) {
        comfrimpassctrl?.setErrors({ passwordMisMatch: true })
      } else {
        comfrimpassctrl?.setErrors(null);
      }
    }
  }
  //#######################################################################
  // Register() {
  //   var body = {
  //     Firstname: this.formModel.value.Firstname,
  //     Lastname: this.formModel.value.Lastname,
  //     Username: this.formModel.value.Username,
  //     Email: this.formModel.value.Email,
  //     Address: this.formModel.value.Address,
  //     State: this.formModel.value.State,
  //     Country: this.formModel.value.Country,
  //     Phone: this.formModel.value.Phone,
  //     PostalCode: this.formModel.value.PostalCode,
  //     Password: this.formModel.value.Passwords.Password
  //   }

  //   return this.http.post(this.ApiUrl + '/api/Account/Register', body);
  // }

  Register(formData: Customers) {
    return this.http.post(this.ApiUrl + '/api/Account/Register', formData);
  }

  //#######################################################################
  Login(formData: Login) {

    return this.http.post(this.ApiUrl + '/api/Account/login', formData);

  }
  //#######################################################################
  LogOut(formData: Login) {

    return this.http.post(this.ApiUrl + '/api/Account/logout', formData);

  }
  //#######################################################################
  EditUser(formData: Customers) {

    return this.http.put(this.ApiUrl + '/api/Account/Edit', formData);

  }
  //#######################################################################
  DeleteUser(formData: any) {

    return this.http.delete(this.ApiUrl + '/api/Account/Delete', formData);

  }
  //#######################################################################
  getUser():Observable<Customers[]> {

    return this.http.get<Customers[]>(this.ApiUrl + '/api/Account/get' ).pipe(map((data )=>{
      const users:Customers[] = [];
      for (let key in data) {
        users.push({...data[key], id:key})
      }
      return users
    }));

  }
  //#######################################################################
  getUserById(formData: Customers,id:any){

     return this.http.get(this.ApiUrl + '/api/Account/getuserById', );

  }
  //#######################################################################
}
