import { Action, createReducer, on } from "@ngrx/store"
import { Cartitems } from "src/app/models/CartItems/cartitems"
import { createCartAction, deleteCartAction } from "../actions/cart.actions"
import { CartState, initialState } from "../state/cart.state"

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

export const cartReducer = (state: CartState | undefined,action: Action)=>{
  return _cartReducer(state,action)
}