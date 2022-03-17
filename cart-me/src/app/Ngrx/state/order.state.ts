import { Order } from "src/app/models/order/Order"

export interface OrderState{
 order:Order[]
}

export const initialSate:OrderState={
 order: []
}