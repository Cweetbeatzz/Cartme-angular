import { createReducer, on } from "@ngrx/store";
import { 
 createOrderFailAction, 
 createOrderRequestAction, 
 createOrderSuccessAction, 
 getOrderDetailsByIdFailAction, 
 getOrderDetailsByIdRequestAction, 
 getOrderDetailsByIdSuccessAction } from "../actions/orderActions";
import { initialSate } from "../state/orderState";

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

export const orderReducer = (state:any,action:any)=>{
  return _orderReducer(state,action)
}