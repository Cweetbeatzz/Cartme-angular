import { Cartitems } from "src/app/models/CartItems/cartitems";

export interface CartState{
 carts:Cartitems[]
}

export const initialState:Cartitems={
 ProductName: "",
 Quantity: 0,
 Price: 0,
 Total: 0,
 Image: ""
}