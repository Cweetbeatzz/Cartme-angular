import { createReducer } from "@ngrx/store"
import { initialState } from "../state/authState"

//##################################################################

const _authReducer = createReducer(initialState)

//##################################################################

export const loginUserReducer = (state: any, action:any) => {
 return _authReducer(state,action)
}