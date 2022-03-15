import { createAction, props } from "@ngrx/store"
import { Order } from "src/app/models/order/Order"
import { 
 ORDER_CREATE_FAIL, 
 ORDER_CREATE_REQUEST, 
 ORDER_CREATE_SUCCESS, 
 ORDER_DETAILS_FAIL,
 ORDER_DETAILS_REQUEST,
 ORDER_DETAILS_SUCCESS} from "../constants/orderConstants"



export const createOrderRequestAction = createAction(ORDER_CREATE_REQUEST,props<{order:Order}>())
export const createOrderSuccessAction = createAction(ORDER_CREATE_SUCCESS,props<{order:Order[]}>())
export const createOrderFailAction = createAction(ORDER_CREATE_FAIL,props<{order:Order}>())

//#######################################################

export const getOrderDetailsByIdRequestAction = createAction(ORDER_DETAILS_REQUEST,props<{order:Order}>())
export const getOrderDetailsByIdSuccessAction = createAction(ORDER_DETAILS_SUCCESS,props<{order:Order}>())
export const getOrderDetailsByIdFailAction = createAction(ORDER_DETAILS_FAIL,props<{order:Order}>())

//#######################################################