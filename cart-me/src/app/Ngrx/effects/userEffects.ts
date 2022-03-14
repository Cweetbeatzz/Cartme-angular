import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map} from 'rxjs/operators'
import { UsersService } from "src/app/services/Account/users.service";
import { 
 CreateUsersRequestAction, 
 CreateUsersSuccessAction, 
 DeleteUsersRequestAction, 
 DeleteUsersSuccessAction, 
 getAllUsersRequestAction,
 getAllUsersSuccessAction,
 getUsersByIdRequestAction,
 getUsersByIdSuccessAction,
 UpdateUsersRequestAction,
 UpdateUsersSuccessAction} from "../actions/userActions";


@Injectable()

export class UserEffects{
  //##########################################################

constructor (private action$: Actions, private userservice:UsersService){}

  //##########################################################

 signup$ = createEffect(() => {
  return this.action$.pipe(ofType(CreateUsersRequestAction),exhaustMap((action)=>{
   return this.userservice.Register(action.cust).pipe(map((data)=> {
    const newUser = this.userservice.Register(data)
    return getAllUsersSuccessAction({newUser});
   }) )
  }))
 })
 //##########################################################

 get$ = createEffect(() => {
  return this.action$.pipe(ofType(getAllUsersRequestAction),exhaustMap((action)=>{
   return this.userservice.getUser(action.cust).pipe(map((data)=> {
    const allUsers = this.userservice.getUser(data)
    return getAllUsersSuccessAction({allUsers});
   }) )
  }))
 })
 //##########################################################

 getById$ = createEffect(() => {
  return this.action$.pipe(ofType(getUsersByIdRequestAction),exhaustMap((action)=>{
   return this.userservice.Login(action.cust).pipe(map((data)=> {
    const userById = this.userservice.Login(data)
    return getUsersByIdSuccessAction({userById});
   }) )
  }))
 })
 //##########################################################

 update$ = createEffect(() => {
  return this.action$.pipe(ofType(UpdateUsersRequestAction),exhaustMap((action)=>{
   return this.userservice.EditUser(action.cust).pipe(map((data)=> {
    const updateUser = this.userservice.EditUser(data)
    return UpdateUsersSuccessAction({updateUser});
   }) )
  }))
 })

  //##########################################################

 delete$ = createEffect(() => {
  return this.action$.pipe(ofType(DeleteUsersRequestAction),exhaustMap((action)=>{
   return this.userservice.DeleteUser(action.cust).pipe(map((data)=> {
    const deleteUser = this.userservice.DeleteUser(data)
    return DeleteUsersSuccessAction({deleteUser});
   }) )
  }))
 })

}