import { Action, createReducer, on } from "@ngrx/store"
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
import { initialState, ProductState } from "../state/product.state"

//##################################################################

 const _productReducer = createReducer(
   initialState,

  //##################################################################

   on(getAllProductsRequestAction,(state,action)=>{
   return {...state,}
 }),
  on(getAllProductsSuccessAction,(state,action)=>{
   return {...state,action:action.products}
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
    let prod = {...action.products}
    return {...state,products:[...state.products]}
 }),
 on(createProductsFailAction,(state,action)=>{
   return {...state,}
 }),

//##################################################################

 on(updateProductsRequestAction,(state,action)=>{
   return {...state,}
 }),
 on(updateProductsSuccessAction,(state,action)=>{

   let oldState = {...state}
    const updatedProduct = state.products.map((prod) => {
     return action.products.id === prod.id? action.products : prod
   })

   return {...state,updatedProduct}
 }),
 on(updateProductsFailAction,(state,action)=>{
   return {...state,}
 }),
 
 //##################################################################

 on(deleteProductsRequestAction,(state,action)=>{
   return {...state,}
 }),
 on(deleteProductsSuccessAction,(state,{id})=>{
   //
   const deleteProduct = state.products.filter((prod)=>{
     return prod.id !== id
   })
   return {...state,products:deleteProduct}
 }),
 on(deleteProductsFailAction,(state,action)=>{
   return {...state,}
 })

 )

 export const productReducer = (state: ProductState | undefined,action: Action) => {
   return _productReducer(state,action)
 }