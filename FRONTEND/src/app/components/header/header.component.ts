import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/Account/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router, private service: UsersService) { }

  ngOnInit(): void {
  }
  // #####################################

  Logout() {
    localStorage.removeItem('token');
    console.info('You are Logged Out')
    this.route.navigateByUrl('/');
  }
}
