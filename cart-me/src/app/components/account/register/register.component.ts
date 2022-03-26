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
import { SweetalertService } from 'src/app/services/Alerts/sweetalert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private route: Router, public RegService: UsersService,private sweetalert:SweetalertService,
    private alertify: AlertsService,private fb: FormBuilder, private store:Store<AppState>) { };

  // ##########################################

  ngOnInit() {
      //reset form after every successfull reg
      this.formModel.reset();
  }

  // ##########################################

  formModel = this.fb.group({
    firstname: ['', Validators.required, ],
    lastname: ['', Validators.required, ],
    userName: ['', Validators.required, ],
    email: ['', Validators.email],
    address: ['', Validators.required,],
    state: ['', Validators.required, ],
    country: ['', Validators.required, ],
    Phone: ['', Validators.required, ],
    postalCode: ['', Validators.required, ],

    Passwords: this.fb.group({
      Password: ['', [Validators.required, ]],
      ConfirmPassword: ['', Validators.required]
    }, { Validators: this.comparePasswords })
  });

  comparePasswords(fg: FormGroup) {

    let comfrimpassctrl = fg.get('ConfirmPassword')

    if (comfrimpassctrl?.errors == null || 'passwordMisMatch' in comfrimpassctrl.errors) {
      if (fg.get('Password')?.value != comfrimpassctrl?.value) {
        comfrimpassctrl?.setErrors({ passwordMisMatch: true })
      } else {
        comfrimpassctrl?.setErrors(null);
      }
    }
  }
  // #######################################################################
  getFormValue(){
          var body = {
      firstname: this.formModel.value.firstname,
      lastname: this.formModel.value.lastname,
      userName: this.formModel.value.userName,
      email: this.formModel.value.email,
      address: this.formModel.value.address,
      state: this.formModel.value.state,
      country: this.formModel.value.country,
      Phone: this.formModel.value.Phone,
      postalCode: this.formModel.value.postalCode,
      Password: this.formModel.value.Passwords.Password
    }
    return body
  }
// ##########################################
// VALIDATIONS *** VALIDATIONS *** VALIDATIONS *** VALIDATIONS *** VALIDATIONS ***

 shoeFirstNameErrors(){
   const getFirstName = this.formModel?.get('firstname');
   if (getFirstName?.touched && !getFirstName.valid) {
     if (getFirstName.errors?.required) {
       return 'First Name is Required😑'
     }
     if (getFirstName.errors?.maxLength) {
       return 'First Name must not exceed 50 characters😑'
     }
   }
   return
 }
 shoeLastNameErrors(){
    const getLastName = this.formModel.get('lastname');
   if (getLastName?.touched && !getLastName.valid) {
     if (getLastName.errors?.required) {
       return 'Last Name is Required😑'
     }
     if (getLastName.errors?.maxLength) {
       return 'Last Name must not exceed 50 characters😑'
     }
   }
   return
 }
 shoeUserNameErrors(){
       const getUserName = this.formModel.get('userName');
   if (getUserName?.touched && !getUserName.valid) {
     if (getUserName.errors?.required) {
       return 'User Name is Required😑'
     }
     if (getUserName.errors?.maxLength) {
       return 'User Name must not exceed 50 characters😑'
     }
   }
   return
 }
 shoeEmailErrors(){
   const getEmail = this.formModel.get('email');
   if (getEmail?.touched && !getEmail.valid) {
     if (getEmail.errors?.required) {
       return 'Email is Required😑'
     }
     if (getEmail.errors?.maxLength) {
       return 'Email must not exceed 50 characters😑'
     }
    if (getEmail.errors?.email) {
       return 'Email is Invalid😑'
     }
   }
   return
 }
 shoeAddressErrors(){
     const getAddress = this.formModel.get('address');
   if (getAddress?.touched && !getAddress.valid) {
     if (getAddress.errors?.required) {
       return 'Address is Required😑'
     }
     if (getAddress.errors?.maxLength) {
       return 'Address must not exceed 50 characters😑'
     }
   }
   return
 }
  shoeStateErrors(){
        const getState = this.formModel.get('state');
   if (getState?.touched && !getState.valid) {
     if (getState.errors?.required) {
       return 'State is Required😑'
     }
     if (getState.errors?.maxLength) {
       return 'State must not exceed 50 characters😑'
     }
   }
   return
 }
  shoeCountryErrors(){
        const getCountry = this.formModel.get('country');
   if (getCountry?.touched && !getCountry.valid) {
     if (getCountry.errors?.required) {
       return 'Country is Required😑'
     }
     if (getCountry.errors?.maxLength) {
       return 'Country must not exceed 100 characters😑'
     }
   }
   return
 }
 shoePhoneErrors(){
        const getPhone = this.formModel.get('Phone');
   if (getPhone?.touched && !getPhone.valid) {
     if (getPhone.errors?.required) {
       return 'Phone is Required😑'
     }
     if (getPhone.errors?.maxLength) {
       return 'Phone must not exceed 11 Numbers😑'
     }
   }
   return
 }
  shoePostalCodeErrors(){
        const getPostalCode = this.formModel.get('postalCode');
   if (getPostalCode?.touched && !getPostalCode.valid) {
     if (getPostalCode.errors?.required) {
       return 'Postal Code is Required😑'
     }
     if (getPostalCode.errors?.maxLength) {
       return 'Postal Code must not exceed 10 Numbers😑'
     }
   }
   return
 }
 shoePasswordErrors(){
          const getPassword = this.formModel.get('Passwords.Password');
   if (getPassword?.touched && !getPassword.valid) {
     if (getPassword.errors?.required) {
       return 'Password is Required😑'
     }
     if (getPassword.errors?.minLength) {
       return 'Minimum length of Password is 6😑'
     }
   }
   return
 }
 shoeConfirmPasswordErrors(){
      const getConfirmPassword = this.formModel.get('Passwords.ConfirmPassword');
   if (getConfirmPassword?.touched && !getConfirmPassword.valid) {
     if (getConfirmPassword.errors?.required) {
       return 'Password is Invalid or do not Match😑'
     }
     if (getConfirmPassword.errors?.minLength) {
       return 'Minimum length of Password is 6😑'
     }
   }
   return
 }

  // ########################################## ||  ##########################################
  // ########################################## ||  ##########################################
  // ########################################## ||  ##########################################



  OnSubmit() {
    if (!this.formModel.valid) {
      return
    }
    this.RegService.Register(this.getFormValue()).subscribe({
      next:(res)=>{
        this.sweetalert.timedNofication('Registeration Successfull.😁😎')
        this.formModel.reset()
        this.route.navigate(['/login'])
      },
      error:(err)=>{
        this.alertify.error(err || 'An Error occured please try again filling form correctly 😣')
      }
      
    })
  }
}
