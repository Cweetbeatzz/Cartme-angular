import { createAction, props } from "@ngrx/store";
import { Cartitems } from "src/app/models/CartItems/cartitems";
import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "../constants/cart.constants";



//#######################################################

export const createCartAction = createAction(ADD_CART_ITEM,props<{cart:Cartitems}>())

//#######################################################

export const deleteCartAction = createAction(REMOVE_CART_ITEM,props<{cart:Cartitems}>())