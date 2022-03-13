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
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
} from "../constants/userConstants";

//#######################################################

export const getAllUsersAction =  createAction(USER_LIST_SUCCESS,props<{cust:Customers}>())

//#######################################################

export const getUsersByIdAction =  createAction(USER_DETAILS_SUCCESS,props<{cust:Customers}>())

//#######################################################

export const CreateUsersAction =  createAction(USER_CREATE_SUCCESS,props<{cust:Customers}>()) 

//#######################################################

export const UpdateUsersAction =  createAction(USER_UPDATE_SUCCESS,props<{cust:Customers}>())

//#######################################################

export const DeleteUsersAction =  createAction(USER_DELETE_SUCCESS,props<{cust:Customers}>())

//#######################################################