import { Cartitems } from "src/app/models/CartItems/cartitems";

export interface CartState{
 carts:Cartitems[]
}

export const initialState:CartState={
 carts: []
}