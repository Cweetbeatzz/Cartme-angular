import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/Account/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route: Router, public RegService: UsersService, private http: HttpClient) { }

  ngOnInit() {
    this.RegService.formModel.reset();

  }

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
