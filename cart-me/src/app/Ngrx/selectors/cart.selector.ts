import { createFeatureSelector, createSelector } from "@ngrx/store"
import { CartState } from "../state/cart.state"

export const CART_STATE_NAME = 'cart'

const getCartState = createFeatureSelector<CartState>(CART_STATE_NAME)

export const getCarts = createSelector(getCartState,(state)=>{
 return state.carts
})