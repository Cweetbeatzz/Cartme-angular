import { createReducer, on } from "@ngrx/store"
import { loginUsersSuccessAction } from "../actions/authActions"
import { initialState } from "../state/authState"

//##################################################################

const _authReducer = createReducer(
 initialState,
 on(loginUsersSuccessAction,(state,action)=>{
 return{...state,user:action.cust}
}),
)

//##################################################################

export const authReducer = (state: any, action:any) => {
 return _authReducer(state,action)
}