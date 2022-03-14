import { createReducer, on } from "@ngrx/store"
import { createCartAction } from "../actions/cartActions"
import { initialState } from "../state/cartState"

const _cartReducer = createReducer(initialState,on(createCartAction,(state,action)=>{
 return {...state}
}))