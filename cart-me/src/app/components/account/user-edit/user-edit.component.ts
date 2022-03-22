import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Customers } from 'src/app/models/Customers/customers';
import { getUserById } from 'src/app/Ngrx/selectors/user.selector';
import { AppState } from 'src/app/Ngrx/store/app.state';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  users: Customers | undefined
  userSubscription: Subscription = new Subscription;

  constructor(private route:ActivatedRoute,private store:Store<AppState>) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params) =>{
    //   const id = params.get('id')
    // })
    this.userSubscription = this.store.select(getUserById).subscribe((users)=>{})
  }
}
