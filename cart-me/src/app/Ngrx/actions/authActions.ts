
import { createAction, props } from "@ngrx/store";
import { Login } from "src/app/models/Login/login";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constants/userConstants";

//#######################################################

export const loginUsersRequestAction =  createAction(USER_LOGIN_REQUEST,props<{cust:Login}>())

//#######################################################

export const loginUsersSuccessAction =  createAction(USER_LOGIN_SUCCESS,props<{cust:Login}>())

//#######################################################

export const loginUsersFailAction =  createAction(USER_LOGIN_FAIL,props<{cust:Login}>())