import { createReducer, on } from "@ngrx/store"
import { setLoadingSpinner } from "../actions/shared.actions"
import { initialState } from "../state/shared.state"

//##################################################################

const _sharedReducer = createReducer(
 initialState, 

 on(setLoadingSpinner,(state,action)=>{
 return {state,showLoading:action.status}
}

),
)

//##################################################################

export const sharedReducer = (state: any, action:any) => {
 return _sharedReducer(state,action)
}
//##################################################################
