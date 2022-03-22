import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/Ngrx/store/app.state';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  productSubscription: Subscription = new Subscription;

  constructor(private route:ActivatedRoute,private store:Store<AppState>) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params) =>{
    //   const id = params.get('id')
    // })
  }

}
