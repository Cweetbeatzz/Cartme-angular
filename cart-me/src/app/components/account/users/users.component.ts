import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/Account/users.service';
import { AlertsService } from 'src/app/services/Alerts/alerts.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private alertify: AlertsService,private UserApi:UsersService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.UserApi.getUser().subscribe({
      next:(res)=>{
        // this.alertify.success(res)
      },
      error:(err)=>{
        this.alertify.error(err)
      }
    })
  }

}
