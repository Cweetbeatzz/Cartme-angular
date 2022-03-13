import { createAction } from "@ngrx/store";
import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "../constants/cartConstants";



//#######################################################

const createCartAction = createAction(ADD_CART_ITEM)

//#######################################################

const deleteCartAction = createAction(REMOVE_CART_ITEM)