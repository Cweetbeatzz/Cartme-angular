import { createReducer, on } from "@ngrx/store"
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

export const authReducer = (state: any, action:any) => {
 return _authReducer(state,action)
}