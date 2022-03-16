import { createFeatureSelector, createSelector } from "@ngrx/store"
import { OrderState } from "../state/order.state"

export const ORDER_STATE_NAME = 'order'

 const getOrderState = createFeatureSelector<OrderState>(ORDER_STATE_NAME)

 export const getUsers = createSelector(getOrderState,(state)=>{
  return state.order
 })