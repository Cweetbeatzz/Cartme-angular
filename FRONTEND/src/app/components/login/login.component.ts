import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/Account/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private service: UsersService) { }

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
        this.route.navigateByUrl('/');
      },
      error => {
        if (error.status == 400) {
          console.error('Invalid Credientials', 'Unauthorized');
        }
        else {
          console.log(error);
        }
      }
    );
  }
  // #####################################
  Click() { }
  // #####################################

  Logout() {
    localStorage.removeItem('token');
    console.info('You are Logged Out')
    this.route.navigateByUrl('/');
  }
}
