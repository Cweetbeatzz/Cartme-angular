import {createReducer, on} from '@ngrx/store'
import { 
  CreateUsersFailAction,
  CreateUsersRequestAction,
  CreateUsersSuccessAction,
  DeleteUsersFailAction,
  DeleteUsersRequestAction,
  DeleteUsersSuccessAction,
  getAllUsersFailAction,
  getAllUsersRequestAction, 
  getAllUsersSuccessAction, 
  getUsersByIdFailAction, 
  getUsersByIdRequestAction, 
  getUsersByIdSuccessAction, 
  UpdateUsersFailAction,
  UpdateUsersRequestAction,
  UpdateUsersSuccessAction} from '../actions/userActions';

import { initialState } from '../state/userState';

//##################################################################

 const _userReducer = createReducer(
   initialState,
  on(getAllUsersRequestAction,(state,action)=>{
   return {...state,}
 }),
 on(getAllUsersSuccessAction,(state,action)=>{
   return {...state,action:action.users}
 }),
 on(getAllUsersFailAction,(state,action)=>{
   return {...state,}
 }),

//##################################################################

 on(getUsersByIdRequestAction,(state,action)=>{
   return {...state,}
 }),
 on(getUsersByIdSuccessAction,(state,action)=>{
   return {...state,}
 }),
 on(getUsersByIdFailAction,(state,action)=>{
   return {...state,}
 }),

//##################################################################

 on(CreateUsersRequestAction,(state,action)=>{
   return {...state,}
 }),
 on(CreateUsersSuccessAction,(state,action)=>{
   return {...state,action:action.users}
 }),
 on(CreateUsersFailAction,(state,action)=>{
   return {...state,}
 }),

//##################################################################

 on(UpdateUsersRequestAction,(state,action)=>{
   return {...state,}
 }),
 on(UpdateUsersSuccessAction,(state,action)=>{
   return {...state,}
 }),
 on(UpdateUsersFailAction,(state,action)=>{
   return {...state,}
 }),
 
 //##################################################################

 on(DeleteUsersRequestAction,(state,action)=>{
   return {...state,}
 }),
 on(DeleteUsersSuccessAction,(state,action)=>{
   return {...state,}
 }),
 on(DeleteUsersFailAction,(state,action)=>{
   return {...state,}
 }))

//##################################################################

export const userReducer = (state:any,action:any)=>{
  return _userReducer(state,action)
}

//##################################################################


