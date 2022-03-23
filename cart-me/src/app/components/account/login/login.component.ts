import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/Account/users.service';
import { AlertsService } from 'src/app/services/Alerts/alerts.service';
import { SweetalertService } from 'src/app/services/Alerts/sweetalert.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private service: UsersService,private alertify: AlertsService,
     private sweetalert:SweetalertService) { }

  formModel = {
    Email: '',
    Password: ''
  }
  ngOnInit(): void {

    if (localStorage.getItem('token') != null) {
      this.route.navigateByUrl('/');
    }
  }
  // #####################################
  Onsubmit(form: NgForm) {
    this.service.Login(form.value).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        this.alertify.success('Login Successful')
        this.route.navigateByUrl('/');
      },
      error => {
        if (error.status == 400) {
          this.alertify.error('Invalid Credientials you are Unauthorized');
        }
      }
    );
  }
  // #####################################
  tick() { 
    // this.alertify.success('Good!')
     this.sweetalert.deleteNotification()
  }
  // #####################################

  Logout() {
    localStorage.removeItem('token');
    this.alertify.error('You are Logged Out');
    this.route.navigateByUrl('/');
  }
}
