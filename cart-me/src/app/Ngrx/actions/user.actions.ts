import {createAction, props} from '@ngrx/store'
import { Customers } from 'src/app/models/Customers/customers';

import {
  USER_CREATE_FAIL,
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
} from "../constants/user.constants";

//#######################################################

export const getAllUsersRequestAction =  createAction(USER_LIST_REQUEST,props<{users:Customers}>())
export const getAllUsersSuccessAction =  createAction(USER_LIST_SUCCESS,props<{users:Customers[]}>())
export const getAllUsersFailAction =  createAction(USER_LIST_FAIL,props<{users:Customers}>())

//#######################################################

export const getUsersByIdRequestAction =  createAction(USER_DETAILS_REQUEST,props<{id:string}>())
export const getUsersByIdSuccessAction =  createAction(USER_DETAILS_SUCCESS,props<{id:string}>())
export const getUsersByIdFailAction =  createAction(USER_DETAILS_FAIL,props<{id:string}>())

//#######################################################

export const CreateUsersRequestAction =  createAction(USER_CREATE_REQUEST,props<{users:Customers}>()) 
export const CreateUsersSuccessAction =  createAction(USER_CREATE_SUCCESS,props<{users:Customers}>()) 
export const CreateUsersFailAction =  createAction(USER_CREATE_FAIL,props<{users:Customers}>()) 

//#######################################################

export const UpdateUsersRequestAction =  createAction(USER_UPDATE_REQUEST,props<{users:Customers}>())
export const UpdateUsersSuccessAction =  createAction(USER_UPDATE_SUCCESS,props<{users:Customers}>())
export const UpdateUsersFailAction =  createAction(USER_UPDATE_FAIL,props<{users:Customers}>())

//####################################################### 

export const DeleteUsersRequestAction =  createAction(USER_DELETE_REQUEST,props<{id:string}>())
export const DeleteUsersSuccessAction =  createAction(USER_DELETE_SUCCESS,props<{id:string}>())
export const DeleteUsersFailAction =  createAction(USER_DELETE_FAIL,props<{id:string}>())

//#######################################################