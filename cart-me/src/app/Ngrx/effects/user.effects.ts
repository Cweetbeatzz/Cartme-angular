import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, mergeMap, switchMap} from 'rxjs/operators'
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
 UpdateUsersSuccessAction} from "../actions/user.actions";


@Injectable()

export class UserEffects{
  //##########################################################

constructor (private action$: Actions, private userservice:UsersService){}

  //##########################################################

 signup$ = createEffect(() => {
  return this.action$.pipe(ofType(CreateUsersRequestAction),mergeMap((action)=>{
   return this.userservice.Register(action.users).pipe(map((users)=> {
    return getAllUsersSuccessAction(users:action.users);
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
   return this.userservice.getUserById(action.id).pipe(map((users)=> {
    return getUsersByIdSuccessAction({id:action.id});
   }) )
  }))
 })
 //##########################################################

 update$ = createEffect(() => {
  return this.action$.pipe(ofType(UpdateUsersRequestAction),switchMap((action)=>{
   return this.userservice.EditUser(action.users).pipe(map((data)=> {
    return UpdateUsersSuccessAction({users:action.users});
   }) )
  }))
 })

  //##########################################################

 delete$ = createEffect(() => {
  return this.action$.pipe(ofType(DeleteUsersRequestAction),switchMap((action)=>{
   return this.userservice.DeleteUser(action.id).pipe(map((data)=> {
    return DeleteUsersSuccessAction({id:action.id});
   }) )
  }))
 })

}