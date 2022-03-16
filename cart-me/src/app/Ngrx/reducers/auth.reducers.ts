import { Action, createReducer, on } from "@ngrx/store"
import { Login } from "src/app/models/Login/login"
import { 
 loginUsersFailAction, 
 loginUsersRequestAction, 
 loginUsersSuccessAction } from "../actions/auth.actions"
import { initialState } from "../state/auth.state"

//##################################################################

const _authReducer = createReducer(
 initialState,
 on(loginUsersRequestAction,(state,action)=>{
 return{...state,user:action.cust}
}),
 on(loginUsersSuccessAction,(state,action)=>{
 return{...state,user:action.cust}
}),
 on(loginUsersFailAction,(state,action)=>{
 return{...state,user:action.cust}
}),
)

//##################################################################

export const authReducer = (state: Login | undefined, action: Action) => {
 return _authReducer(state,action)
}