import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RolesService } from '../services/Account/roles.service';
import { AlertsService } from '../services/Alerts/alerts.service';
import { HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminAccessGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {

  isAdmin: boolean = false
  constructor(private alertify: AlertsService, private roleService: RolesService, private router: Router, private request: HttpRequest<unknown>) { }
  //##############################################################
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const authorization = this.request.headers.get('Authorization')

    if (authorization) {
      const data = JSON.parse(atob(authorization.split('.')[1]))
      if (data.roles2.includes('Admin')) {
        return true;
      }
    }
    this.router.navigate(["/"]);

    return false;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
