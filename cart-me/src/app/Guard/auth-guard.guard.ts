import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../Ngrx/store/app.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
   constructor(private route: Router, private store:Store<AppState>) { }
   
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (localStorage.getItem('token') != null) {
      return true;
    } else {
      this.route.navigateByUrl('/');
      return false;
    }

  }
  
}
