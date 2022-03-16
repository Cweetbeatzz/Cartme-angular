import { Action, createReducer, on } from "@ngrx/store"
import { Products } from "src/app/models/Products/products"
import { 
  createProductsFailAction,
  createProductsRequestAction,
  createProductsSuccessAction,
  deleteProductsFailAction,
  deleteProductsRequestAction,
  deleteProductsSuccessAction,
  getAllProductsByCategoryFailAction, 
  getAllProductsByCategoryRequestAction, 
  getAllProductsByCategorySuccessAction, 
  getAllProductsFailAction, 
  getAllProductsRequestAction, 
  getAllProductsSuccessAction, 
  getProductsByIdFailAction, 
  getProductsByIdRequestAction, 
  getProductsByIdSuccessAction, 
  updateProductsFailAction, 
  updateProductsRequestAction,
  updateProductsSuccessAction} from "../actions/product.actions"
import { initialState } from "../state/product.state"

//##################################################################

 const _productReducer = createReducer(
   initialState,

  //##################################################################

   on(getAllProductsRequestAction,(state,action)=>{
   return {...state,}
 }),
  on(getAllProductsSuccessAction,(state,action)=>{
   return {...state,}
 }),
 on(getAllProductsFailAction,(state,action)=>{
   return {...state,}
 }),

  //##################################################################

 on(getAllProductsByCategoryRequestAction,(state,action)=>{
   return {...state,}
 }),
 on(getAllProductsByCategorySuccessAction,(state,action)=>{
   return {...state,}
 }),
 on(getAllProductsByCategoryFailAction,(state,action)=>{
   return {...state,}
 }),

  //##################################################################

 on(getProductsByIdRequestAction,(state,action)=>{
   return {...state,}
 }),
 on(getProductsByIdSuccessAction,(state,action)=>{
   return {...state,}
 }),
 on(getProductsByIdFailAction,(state,action)=>{
   return {...state,}
 }),

//##################################################################

 on(createProductsRequestAction,(state,action)=>{
   return {...state,}
 }),
 on(createProductsSuccessAction,(state,action)=>{
   return {...state,}
 }),
 on(createProductsFailAction,(state,action)=>{
   return {...state,}
 }),

//##################################################################

 on(updateProductsRequestAction,(state,action)=>{
   return {...state,}
 }),
 on(updateProductsSuccessAction,(state,action)=>{
   return {...state,}
 }),
 on(updateProductsFailAction,(state,action)=>{
   return {...state,}
 }),
 
 //##################################################################

 on(deleteProductsRequestAction,(state,action)=>{
   return {...state,}
 }),
 on(deleteProductsSuccessAction,(state,action)=>{
   return {...state,}
 }),
 on(deleteProductsFailAction,(state,action)=>{
   return {...state,}
 })

 )

 export const productReducer = (state: Products | undefined,action: Action) => {
   return _productReducer(state,action)
 }