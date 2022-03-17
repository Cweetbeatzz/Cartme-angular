import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Customers } from 'src/app/models/Customers/customers';
import { CreateUsersSuccessAction } from 'src/app/Ngrx/actions/user.actions';
import { AppState } from 'src/app/Ngrx/store/app.state';
import { UsersService } from 'src/app/services/Account/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private route: Router, public RegService: UsersService, 
    private http: HttpClient,private fb: FormBuilder,private fg:FormGroup, private store:Store<AppState>) { };

  // ##########################################

  ngOnInit() {
      //reset form after every successfull reg
  }

  // ########################################## ||  ##########################################
  // ########################################## ||  ##########################################
  // ########################################## ||  ##########################################
    RegistrationForm: FormGroup = new FormGroup({
      id: new FormControl(),
      Firstname: new FormControl(null,[ Validators.required, Validators.maxLength(50)]),
      lastname: new FormControl(null,[ Validators.required,Validators.maxLength(50)]),
      username: new FormControl(null,[ Validators.required,Validators.maxLength(50)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      address: new FormControl(null,[ Validators.required,Validators.maxLength(350)]),
      phone: new FormControl(null, [Validators.required, Validators.maxLength(11)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null,[ Validators.required])
   })
// ##########################################
// VALIDATIONS *** VALIDATIONS *** VALIDATIONS *** VALIDATIONS *** VALIDATIONS ***

 shoeFirstNameErrors(){
   const getFirstName = this.RegistrationForm?.get('Firstname');
   if (getFirstName?.touched && !getFirstName.valid) {
     if (getFirstName.errors?.required) {
       return 'First Name is Required'
     }
     if (getFirstName.errors?.maxLength) {
       return 'First Name must not exceed 50 characters'
     }
   }
   return
 }
 shoeLastNameErrors(){
    const getLastName = this.RegistrationForm?.get('Lastname');
   if (getLastName?.touched && !getLastName.valid) {
     if (getLastName.errors?.required) {
       return 'Last Name is Required'
     }
     if (getLastName.errors?.maxLength) {
       return 'Last Name must not exceed 50 characters'
     }
   }
   return
 }
 shoeUserNameErrors(){
       const getUserName = this.RegistrationForm?.get('Username');
   if (getUserName?.touched && !getUserName.valid) {
     if (getUserName.errors?.required) {
       return 'User Name is Required'
     }
     if (getUserName.errors?.maxLength) {
       return 'User Name must not exceed 50 characters'
     }
   }
   return
 }
 shoeEmailErrors(){
   const getEmail = this.RegistrationForm?.get('Email');
   if (getEmail?.touched && !getEmail.valid) {
     if (getEmail.errors?.required) {
       return 'Email is Required'
     }
     if (getEmail.errors?.maxLength) {
       return 'Email must not exceed 50 characters'
     }
    if (getEmail.errors?.email) {
       return 'Email is Invalid'
     }
   }
   return
 }
 shoeAddressErrors(){
     const getAddress = this.RegistrationForm?.get('Address');
   if (getAddress?.touched && !getAddress.valid) {
     if (getAddress.errors?.required) {
       return 'Address is Required'
     }
     if (getAddress.errors?.maxLength) {
       return 'Address must not exceed 50 characters'
     }
   }
   return
 }
 shoePhoneErrors(){
        const getPhone = this.RegistrationForm?.get('Phone');
   if (getPhone?.touched && !getPhone.valid) {
     if (getPhone.errors?.required) {
       return 'Phone is Required'
     }
     if (getPhone.errors?.maxLength) {
       return 'Phone must not exceed 50 characters'
     }
   }
   return
 }
 shoePasswordErrors(){
          const getPassword = this.RegistrationForm?.get('Password');
   if (getPassword?.touched && !getPassword.valid) {
     if (getPassword.errors?.required) {
       return 'Password is Required'
     }
     if (getPassword.errors?.minLength) {
       return 'Minimum length of Password is 6'
     }
   }
   return
 }
 shoeConfirmPasswordErrors(){
             const getConfirmPassword = this.RegistrationForm?.get('ConfirmPassword');
   if (getConfirmPassword?.touched && !getConfirmPassword.valid) {
     if (getConfirmPassword.errors?.required) {
       return 'Password is Invalid or do not Match'
     }
     if (getConfirmPassword.errors?.maxLength) {
       return 'Minimum length of Password is 6'
     }
   }
   return
 }

 // ##########################################
 onCreateUser(){
   if (!this.RegistrationForm?.valid) {
     return
   }

   const regForm:Customers = {
     Firstname: this.RegistrationForm.value.Firstname,
     Lastname: this.RegistrationForm.value.Lastname,
     Username: this.RegistrationForm.value.Username,
     Email: this.RegistrationForm.value.Email,
     Address: this.RegistrationForm.value.Address,
     State: this.RegistrationForm.value.State,
     Country: this.RegistrationForm.value.Country,
     Phone: this.RegistrationForm.value.Phone,
     PostalCode: this.RegistrationForm.value.PostalCode,
     Password: this.RegistrationForm.value.Password,
     ConfirmPassword: this.RegistrationForm.value.ConfirmPassword
   }

   this.store.dispatch(CreateUsersSuccessAction({users:regForm}))
 }
}
