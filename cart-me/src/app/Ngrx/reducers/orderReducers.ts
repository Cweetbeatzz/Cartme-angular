import { createReducer, on } from "@ngrx/store";
import { createOrderSuccessAction } from "../actions/orderActions";
import { initialSate } from "../state/orderState";

const _orderReducer = createReducer(initialSate,on(createOrderSuccessAction,(state,action)=>{
 return {...state}
}))