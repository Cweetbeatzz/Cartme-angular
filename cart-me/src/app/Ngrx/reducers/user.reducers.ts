import {Action, createReducer, on} from '@ngrx/store'
import { Customers } from 'src/app/models/Customers/customers';
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
  UpdateUsersSuccessAction} from '../actions/user.actions';

import { initialState } from '../state/user.state';

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
   let user = {...action.users}
   return {...state,action:user}
 }),
 on(CreateUsersFailAction,(state,action)=>{
   return {...state,}
 }),

//##################################################################

 on(UpdateUsersRequestAction,(state,action)=>{
   return {...state,}
 }),
 on(UpdateUsersSuccessAction,(state,action)=>{
   let oldState = {...state}
   //
   const updatedUser = state.oldState.map((user)=>{
     return action.users.id === user.id? action.users : user
   })
   return {...state, users:updatedUser}
 }),
 on(UpdateUsersFailAction,(state,action)=>{
   return {...state,}
 }),
 
 //##################################################################

 on(DeleteUsersRequestAction,(state,action)=>{
   return {...state,}
 }),
 on(DeleteUsersSuccessAction,(state,{id})=>{
   //
   const deleteUser = state.user.filter((user)=>{
     return user.id !== id
   })
   return {...state,users:deleteUser}
 }),
 on(DeleteUsersFailAction,(state,action)=>{
   return {...state,}
 }))

//##################################################################

export const userReducer = (state: Customers | undefined,action: Action)=>{
  return _userReducer(state,action)
}

//##################################################################


