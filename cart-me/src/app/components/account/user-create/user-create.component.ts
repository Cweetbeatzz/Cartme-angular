import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor() { }

  formModel = {
     firstname: '',
     lastname: '',
     userName: '',
     email: '',
     address: '',
     state: '',
     country: '',
     Phone: '',
     postalCode: '',
     Password: '',
     ConfirmPassword: '',
     roles:''
  }

  ngOnInit(): void {
  }

  // ##########################################
// VALIDATIONS *** VALIDATIONS *** VALIDATIONS *** VALIDATIONS *** VALIDATIONS ***

 shoeFirstNameErrors(){
 }
  OnSubmit(form:NgForm){}
}
