import {createReducer, on} from '@ngrx/store'
import { getAllUsersSuccessAction } from '../actions/userActions';
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
import { initialState } from '../state/userState';

//##################################################################

 const _userReducer = createReducer(initialState,on(getAllUsersSuccessAction,(state,action)=>{
   return {...state,}
 }))

//##################################################################

export const userListReducer = (state:any,action:any)=>{
  return _userReducer(state,action)
}

//##################################################################

// export const userListReducer = (state: any,action:any) => {
// const userList = createReducer(state)
//   switch (action.type) {
//     case USER_LIST_REQUEST:
//       return { loading: true };
//     case USER_LIST_SUCCESS:
//       return { loading: false, payload: action.payload };
//     case USER_LIST_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

//##################################################################

// export const userByIdReducer = (state = { loading: true, users: {} },action:any) => {
//   const userById = createReducer(state)
//   switch (action.type) {
//     case USER_DETAILS_REQUEST:
//       return { loading: true };
//     case USER_DETAILS_SUCCESS:
//       return { loading: false, payload: action.payload };
//     case USER_DETAILS_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// //##################################################################

// export const createUserReducer = (state = {}, action:any) => {
//   const userCreate = createReducer(state)
//   switch (action.type) {
//     case USER_CREATE_REQUEST:
//       return { loading: true };
//     case USER_CREATE_SUCCESS:
//       return { loading: false, category: action.payload };
//     case USER_CREATE_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// //##################################################################

// export const updateUserReducer = (state = {}, action:any) => {
//   const userupdate = createReducer(state)
//   switch (action.type) {
//     case USER_UPDATE_REQUEST:
//       return { loading: true };
//     case USER_UPDATE_SUCCESS:
//       return { loading: false, payload: action.payload };
//     case USER_UPDATE_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// //##################################################################

// export const deleteUserReducer = (state = {}, action:any) => {
//   const userDelete = createReducer(state)
//   switch (action.type) {
//     case USER_DELETE_REQUEST:
//       return { loading: true };
//     case USER_DELETE_SUCCESS:
//       return { loading: false, payload: action.payload };
//     case USER_DELETE_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// //##################################################################

// export const loginUserReducer = (state = { loading: true }, action:any) => {
//   const userLogin = createReducer(state)
//   switch (action.type) {
//     case USER_LOGIN_REQUEST:
//       return { loading: true };
//     case USER_LOGIN_SUCCESS:
//       return { loading: false, userInfo: action.payload };
//     case USER_LOGIN_FAIL:
//       return { loading: false, error: action.payload };
//     case USER_LOGOUT:
//       return {};
//     default:
//       return state;
//   }
// };
