import { Products } from "src/app/models/Products/products";


export interface ProductState{
products:Products[]
}

export const initialState:ProductState = {
 products: []
}