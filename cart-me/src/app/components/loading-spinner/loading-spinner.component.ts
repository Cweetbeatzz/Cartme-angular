import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getLoading } from 'src/app/Ngrx/selectors/shared.selector';
import { AppState } from 'src/app/Ngrx/store/app.state';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {

  showLoading!: Observable<boolean>;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading)
  }

}
