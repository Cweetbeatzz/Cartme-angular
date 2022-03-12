import {createAction} from '@ngrx/store'

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
export const getAllUsersAction =  createAction('getAllUsersAction')
//#######################################################
export const getUsersByIdAction =  createAction('getUsersByIdAction')
//#######################################################
export const CreateUsersAction =  createAction('CreateUsersAction')  
//#######################################################
export const UpdateUsersAction =  createAction('UpdateUsersAction')
//#######################################################
export const DeleteUsersAction =  createAction('DeleteUsersAction')
//#######################################################