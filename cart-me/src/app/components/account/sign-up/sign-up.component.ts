import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/Account/users.service';
import { AlertsService } from 'src/app/services/Alerts/alerts.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerationForm!: FormGroup ;

  constructor(private route: Router, public ApiRegService: UsersService,private alertify: AlertsService,private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.createRegisterForm()
  }

  // passwordMatchCheck(fg:FormGroup):Validators{
  //   return fg.get('Password')?.value === fg.get('confirmPassword')?.value ? '' : {notmatched:true}
  // }

  createRegisterForm(){
    this.registerationForm = this.fb.group({
      //  id: new FormControl(),
      Firstname: ['', Validators.required],
      Lastname: ['', Validators.required],
      Username: ['', Validators.required],
      Email: ['', Validators.required],
      Address: ['', Validators.required],
      Phone:  ['',Validators.required],
      State:  ['',Validators.required],
      Country:  ['',Validators.required],
      PostalCode:  ['',Validators.required],
      Password: ['',Validators.required],
      ConfirmPassword: ['', Validators.required]
    })
  }

  shoeFirstNameErrors(){
    const getFirstName = this.registerationForm?.get('Firstname');
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
    const getLastName = this.registerationForm?.get('Lastname');
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
       const getUserName = this.registerationForm?.get('Username');
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
   const getEmail = this.registerationForm?.get('Email');
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
     const getAddress = this.registerationForm?.get('Address');
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
        const getState = this.registerationForm?.get('State');
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
        const getCountry = this.registerationForm?.get('Country');
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
        const getPhone = this.registerationForm?.get('Phone');
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
        const getPostalCode = this.registerationForm?.get('PostalCode');
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
          const getPassword = this.registerationForm?.get('Password');
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
      const getConfirmPassword = this.registerationForm?.get('ConfirmPassword');
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
// #######################################################################

  OnSubmit() {
    if (!this.registerationForm.valid) {
      return
    }
    this.ApiRegService.Register(this.registerationForm.value).subscribe({
      next:(res)=>{
        this.alertify.success('Registeration Successfull.')
        this.route.navigate(['/login'])
      },
      error:()=>{
        this.alertify.error('An Error occured please try again filling form correctly')
      }
      
    })
  }
}
