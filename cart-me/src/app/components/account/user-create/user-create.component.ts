import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/Account/users.service';
import { AlertsService } from 'src/app/services/Alerts/alerts.service';
import { SweetalertService } from 'src/app/services/Alerts/sweetalert.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  // ##########################################

  constructor(public RegService: UsersService, private alertify: AlertsService, private sweetalert: SweetalertService,
    private route: Router,) { }

  // ##########################################
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
    roles: ''
  }
  // ##########################################

  ngOnInit(): void {
  }

  // ##########################################
  // VALIDATIONS *** VALIDATIONS *** VALIDATIONS *** VALIDATIONS *** VALIDATIONS ***

  shoeFirstNameErrors() {

  }

  // ##########################################

  OnSubmit(form: NgForm) {
    this.RegService.Register(form.value).subscribe({
      next: (res) => {
        this.sweetalert.timedNofication('Registeration Successfull.😁😎');
        this.route.navigate(['/login']);
      },
      error: (err) => {
        this.alertify.error('An Error Occured...😑🤨');
      },
      complete: () => { }
    })
  }
}
