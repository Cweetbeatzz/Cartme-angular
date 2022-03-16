import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customers } from 'src/app/models/Customers/customers';
import { UsersService } from 'src/app/services/Account/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private route: Router, public RegService: UsersService, private http: HttpClient,private fb: FormBuilder) { }
;
   RegistrationForm: FormGroup | undefined;
   UserModel: Customers | undefined ;
  userSubmitted: boolean = false;

  ngOnInit() {
    this.RegService.formModel.reset();

  }
  // ##########################################
  CreateRegForm() {
    this.RegistrationForm = this.fb.group({
      id: new FormControl(),
      firstname: [null, Validators.required, Validators.maxLength(50)],
      lastname: [null, Validators.required,Validators.maxLength(50)],
      username: [null, Validators.required,Validators.maxLength(50)],
      email: [null, [Validators.required, Validators.email]],
      address: [null, Validators.required,Validators.maxLength(350)],
      phone: [null, [Validators.required, Validators.maxLength(11)]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required]
    });
  }
  // ##########################################

  showUserNameErrors(){
    if (this.RegistrationForm?.errors) {
      
    }
  }

  // ##########################################

  RegisterSubmit() {
    this.RegService.Register().subscribe(
      (result: any) => {
        if (result.succeeded) {
          this.RegService.formModel.reset();
        } else {
          result.errors.forEach((element: { code: any; }) => {
            switch (element.code) {
              case '':
                break;
            }
          });
        }
      },
      error => {
        console.error(error);
      }
    );
  }
}
