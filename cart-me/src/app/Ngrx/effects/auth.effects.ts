import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginUsersRequestAction, loginUsersSuccessAction } from "../actions/auth.actions";
import { exhaustMap, map, mergeMap} from 'rxjs/operators'
import { UsersService } from "src/app/services/Account/users.service";

@Injectable()

export class AuthEffects{

 //##########################################################

constructor (private action$: Actions, private authservice:UsersService){}

 //##########################################################

 login$ = createEffect(() => {
  return this.action$.pipe(ofType(loginUsersRequestAction),exhaustMap((action)=>{
   return this.authservice.Login(action.cust).pipe(map((data)=> {
    return loginUsersSuccessAction(data);
   }) )
  }))
 })

 //##########################################################

} 


