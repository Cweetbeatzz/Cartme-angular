import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RolesService } from '../services/Account/roles.service';
import { SweetalertService } from '../services/Alerts/sweetalert.service';

@Injectable({
  providedIn: 'root'
})
export class SellerAccessGuard implements CanActivate {

   roleId:string = ''
   isSeller:any
   roleDetails:any
  //#######################################################################

  constructor(private api:RolesService,private sweetalert:SweetalertService){}
  //#######################################################################

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return true;
  }

  //#######################################################################

  checkIfRoleIsSeller(){
    this.api.getRolesById(this.roleId).subscribe({
      next:(res)=>{
        this.roleDetails = res
        this.sweetalert.timedNofication('Access Granted...🤩')
        return true
      },
      error:(err)=>{
        this.sweetalert.timedNofication(err || 'Restricted Access! You are Unauthorized...😑')
      }
    })
  }
  
}
