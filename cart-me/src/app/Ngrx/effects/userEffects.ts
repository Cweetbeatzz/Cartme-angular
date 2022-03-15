import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, mergeMap} from 'rxjs/operators'
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
  return this.action$.pipe(ofType(CreateUsersRequestAction),mergeMap((action)=>{
   return this.userservice.Register(action.users).pipe(map((users)=> {
    const newUser = this.userservice.Register(users)
    return getAllUsersSuccessAction({newUser});
   }) )
  }))
 })
 //##########################################################

 get$ = createEffect(() => {
  return this.action$.pipe(ofType(getAllUsersRequestAction),mergeMap((action)=>{
   return this.userservice.getUser().pipe(map((users)=> {
    return getAllUsersSuccessAction({users});
   }) )
  }))
 })
 //##########################################################

 getById$ = createEffect(() => {
  return this.action$.pipe(ofType(getUsersByIdRequestAction),exhaustMap((action)=>{
   return this.userservice.getUserById(action.users).pipe(map((users)=> {
    const userById = this.userservice.getUserById(users)
    return getUsersByIdSuccessAction({userById});
   }) )
  }))
 })
 //##########################################################

 update$ = createEffect(() => {
  return this.action$.pipe(ofType(UpdateUsersRequestAction),exhaustMap((action)=>{
   return this.userservice.EditUser(action.users).pipe(map((data)=> {
    const updateUser = this.userservice.EditUser(data)
    return UpdateUsersSuccessAction({updateUser});
   }) )
  }))
 })

  //##########################################################

 delete$ = createEffect(() => {
  return this.action$.pipe(ofType(DeleteUsersRequestAction),exhaustMap((action)=>{
   return this.userservice.DeleteUser(action.users).pipe(map((data)=> {
    const deleteUser = this.userservice.DeleteUser(data)
    return DeleteUsersSuccessAction({deleteUser});
   }) )
  }))
 })

}