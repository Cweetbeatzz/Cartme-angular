import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertsService } from '../services/Alerts/alerts.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
   constructor(private route: Router,private alertify: AlertsService) { }
   
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (localStorage.getItem('token') != null) {
      return true;
    } else {
      this.alertify.error('Unauthorized Access!!!')
      this.route.navigateByUrl('/');
      return false;
    }

  }
  
}
