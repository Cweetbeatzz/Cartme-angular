import { createReducer, on } from "@ngrx/store"
import { createCartAction, deleteCartAction } from "../actions/cart.actions"
import { initialState } from "../state/cart.state"

const _cartReducer = createReducer(
 initialState,
//##################################################################
 
 on(createCartAction,(state,action)=>{
 return {...state}
}),

 on(deleteCartAction,(state,action)=>{
 return {...state}
}),
//##################################################################

)


//##################################################################

export const cartReducer = (state:any,action:any)=>{
  return _cartReducer(state,action)
}