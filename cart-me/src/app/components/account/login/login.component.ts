import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from 'src/app/Ngrx/actions/shared.actions';
import { AppState } from 'src/app/Ngrx/store/app.state';
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
     private sweetalert:SweetalertService,private store:Store<AppState>) { }

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
    //setting loading spinner on request to server
    // this.store.dispatch(setLoadingSpinner({status:true}))
    //server call
    this.service.Login(form.value).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        this.route.navigate(['/home']);
        //setting loading spinner to false on request to server complete
        // this.store.dispatch(setLoadingSpinner({status:false}))
        
        this.alertify.success('Login Successful😁😎😎')
        
      },
      error => {
        if (error.status == 400) {
          this.alertify.error('Invalid Credientials you are Unauthorized😑🤨');
        }
      }
    );
  }
  // #####################################
 

 
}
