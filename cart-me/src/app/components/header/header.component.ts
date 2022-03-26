import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/Account/users.service';

import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { AlertsService } from 'src/app/services/Alerts/alerts.service';
import { SweetalertService } from 'src/app/services/Alerts/sweetalert.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router, private service: UsersService,private alertify: AlertsService,private sweetalert:SweetalertService) {
   }
   // ##################################### 

  ngOnInit(): void {
   this.checkLoggedIn()
  }
  // #####################################
  checkLoggedIn(){
    if (localStorage.getItem('token') != null) {
      return true;
    } 
      return false;
  }
  // #####################################

  Logout() {
    localStorage.removeItem('token');
    this.sweetalert.timedNofication('You are Logged Out🙄🙂🙄')
    this.route.navigateByUrl('/');
  }
}
