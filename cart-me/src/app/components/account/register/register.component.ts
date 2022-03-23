import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Customers } from 'src/app/models/Customers/customers';
import { CreateUsersSuccessAction } from 'src/app/Ngrx/actions/user.actions';
import { AppState } from 'src/app/Ngrx/store/app.state';
import { UsersService } from 'src/app/services/Account/users.service';
import { AlertsService } from 'src/app/services/Alerts/alerts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private route: Router, public RegService: UsersService, 
    private alertify: AlertsService,private fb: FormBuilder, private store:Store<AppState>) { };

  // ##########################################

  ngOnInit() {
      //reset form after every successfull reg
  }
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
   const getFirstName = this.formModel.get('Firstname');
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
    const getLastName = this.formModel.get('Lastname');
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
       const getUserName = this.formModel.get('Username');
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
   const getEmail = this.formModel.get('Email');
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
     const getAddress = this.formModel.get('Address');
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
  shoeStateErrors(){
        const getState = this.formModel.get('State');
   if (getState?.touched && !getState.valid) {
     if (getState.errors?.required) {
       return 'State is Required'
     }
     if (getState.errors?.maxLength) {
       return 'State must not exceed 50 characters'
     }
   }
   return
 }
  shoeCountryErrors(){
        const getCountry = this.formModel.get('Country');
   if (getCountry?.touched && !getCountry.valid) {
     if (getCountry.errors?.required) {
       return 'Country is Required'
     }
     if (getCountry.errors?.maxLength) {
       return 'Country must not exceed 100 characters'
     }
   }
   return
 }
 shoePhoneErrors(){
        const getPhone = this.formModel.get('Phone');
   if (getPhone?.touched && !getPhone.valid) {
     if (getPhone.errors?.required) {
       return 'Phone is Required'
     }
     if (getPhone.errors?.maxLength) {
       return 'Phone must not exceed 11 Numbers'
     }
   }
   return
 }
  shoePostalCodeErrors(){
        const getPostalCode = this.formModel.get('PostalCode');
   if (getPostalCode?.touched && !getPostalCode.valid) {
     if (getPostalCode.errors?.required) {
       return 'Postal Code is Required'
     }
     if (getPostalCode.errors?.maxLength) {
       return 'Postal Code must not exceed 10 Numbers'
     }
   }
   return
 }
 shoePasswordErrors(){
          const getPassword = this.formModel.get('Passwords.Password');
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
      const getConfirmPassword = this.formModel.get('Passwords.ConfirmPassword');
   if (getConfirmPassword?.touched && !getConfirmPassword.valid) {
     if (getConfirmPassword.errors?.required) {
       return 'Password is Invalid or do not Match'
     }
     if (getConfirmPassword.errors?.minLength) {
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

  // ########################################## ||  ##########################################
  // ########################################## ||  ##########################################
  // ########################################## ||  ##########################################

  formModel = this.fb.group({
    Firstname: ['', Validators.required, Validators.maxLength(50)],
    Lastname: ['', Validators.required, Validators.maxLength(50)],
    Username: ['', Validators.required, Validators.maxLength(50)],
    Email: ['',Validators.required, Validators.email],
    Address: ['', Validators.required,Validators.maxLength(350)],
    State: ['', Validators.required, Validators.maxLength(50)],
    Country: ['', Validators.required, Validators.maxLength(100)],
    Phone: ['', Validators.required, Validators.maxLength(11)],
    PostalCode: ['', Validators.required, Validators.maxLength(10)],

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
  // #######################################################################
  Register() {
    var body = {
      Firstname: this.formModel.value.Firstname,
      Lastname: this.formModel.value.Lastname,
      Username: this.formModel.value.Username,
      Email: this.formModel.value.Email,
      Address: this.formModel.value.Address,
      State: this.formModel.value.State,
      Country: this.formModel.value.Country,
      Phone: this.formModel.value.Phone,
      PostalCode: this.formModel.value.PostalCode,
      Password: this.formModel.value.Passwords.Password
    }
    return body;
  }
}
