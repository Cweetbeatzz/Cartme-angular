import { Order } from "src/app/models/order/Order"

export interface OrderState{
 order:Order[]
}

export const initialSate:Order={
 userId: "",
 products: [],
 amount: 0,
 qty: 0
}