import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/Account/users.service';
import { AlertsService } from 'src/app/services/Alerts/alerts.service';
import { SweetalertService } from 'src/app/services/Alerts/sweetalert.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerationForm: FormGroup = new FormGroup({});

  constructor(private route: Router, public ApiRegService: UsersService,private sweetalert:SweetalertService,
    private alertify: AlertsService,private fb: FormBuilder ) { }

  ngOnInit(): void {
    //reset form after every successfull reg
      this.registerationForm.reset();
      //
    this.registerationForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      Phone:  ['',Validators.required],
      state:  ['',Validators.required],
      country:  ['',Validators.required],
      postalCode:  ['',Validators.required],
      Password: ['',Validators.required],
      // ConfirmPassword: ['', Validators.required]
    })
  }

  // passwordMatchCheck(fg:FormGroup):Validators{
  //   return fg.get('Password')?.value === fg.get('confirmPassword')?.value ? '' : {notmatched:true}
  // }



  shoeFirstNameErrors(){
    const getFirstName = this.registerationForm?.get('firstname');
   if (getFirstName?.touched && !getFirstName.valid) {
     if (getFirstName.errors?.required) {
       return 'First Name is Required 😑'
     }
     if (getFirstName.errors?.maxLength) {
       return 'First Name must not exceed 50 characters😑'
     }
   }
   return
 }
  shoeLastNameErrors(){
    const getLastName = this.registerationForm?.get('lastname');
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
       const getUserName = this.registerationForm?.get('userName');
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
   const getEmail = this.registerationForm?.get('email');
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
     const getAddress = this.registerationForm?.get('address');
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
        const getState = this.registerationForm?.get('state');
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
        const getCountry = this.registerationForm?.get('country');
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
        const getPhone = this.registerationForm?.get('Phone');
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
        const getPostalCode = this.registerationForm?.get('postalCode');
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
          const getPassword = this.registerationForm?.get('Password');
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
      const getConfirmPassword = this.registerationForm?.get('ConfirmPassword');
   if (getConfirmPassword?.touched && !getConfirmPassword.valid) {
     if (getConfirmPassword.errors?.required) {
       return 'Password is Invalid or do not Match😑'
     }
     if (getConfirmPassword.errors?.minLength) {
       return 'Minimum length of Password is 6 😑'
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
        this.sweetalert.timedNofication('Registeration Successfull.😁😎')
        this.registerationForm.reset()
        this.route.navigate(['/login'])
      },
      error:(err)=>{
        this.alertify.error(err || 'An Error occured please try again filling form correctly 😣')
      }
      
    })
  }
}
