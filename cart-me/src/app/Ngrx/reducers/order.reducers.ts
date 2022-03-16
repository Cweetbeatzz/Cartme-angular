import { Action, createReducer, on } from "@ngrx/store";
import { Order } from "src/app/models/order/Order";
import { 
 createOrderFailAction, 
 createOrderRequestAction, 
 createOrderSuccessAction, 
 getOrderDetailsByIdFailAction, 
 getOrderDetailsByIdRequestAction, 
 getOrderDetailsByIdSuccessAction } from "../actions/order.actions";
import { initialSate } from "../state/order.state";

const _orderReducer = createReducer(
 initialSate,
//##################################################################

 on(createOrderRequestAction,(state,action)=>{
 return {...state}
}),
 on(createOrderSuccessAction,(state,action)=>{
 return {...state}
}),
 on(createOrderFailAction,(state,action)=>{
 return {...state}
}),

//##################################################################

 on(getOrderDetailsByIdRequestAction,(state,action)=>{
 return {...state}
}),
 on(getOrderDetailsByIdSuccessAction,(state,action)=>{
 return {...state}
}),
 on(getOrderDetailsByIdFailAction,(state,action)=>{
 return {...state}
}),
//##################################################################
)

//##################################################################

export const orderReducer = (state: Order | undefined,action: Action)=>{
  return _orderReducer(state,action)
}