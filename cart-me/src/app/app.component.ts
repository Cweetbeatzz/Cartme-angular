import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getLoading } from './Ngrx/selectors/shared.selector';
import { AppState } from './Ngrx/store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cart-me';
  showLoading!: Observable<boolean>;
  

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading)
  }


}
