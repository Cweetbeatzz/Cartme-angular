import { createReducer, on } from "@ngrx/store"
import { getAllProductsSuccessAction } from "../actions/productActions"
import { initialState } from "../state/productState"

//##################################################################

 const _productReducer = createReducer(initialState,on(getAllProductsSuccessAction,(state,action)=>{
   return {...state,}
 }))