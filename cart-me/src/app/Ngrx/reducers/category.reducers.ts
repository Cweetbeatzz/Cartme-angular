import { Action, createReducer, on } from "@ngrx/store";
import { Categories } from "src/app/models/Categories/categories";
import { 
 createCategoryFailAction,
 createCategoryRequestAction,
 createCategorySuccessAction,
 deleteCategoryFailAction,
 deleteCategoryRequestAction,
 deleteCategorySuccessAction,
 getAllCategoriesByIdFailAction, 
 getAllCategoriesByIdRequestAction, 
 getAllCategoriesByIdSuccessAction, 
 getAllCategoriesFailAction, 
 getAllCategoriesRequestAction, 
 getAllCategoriesSuccessAction, 
 updateCategoryFailAction,
 updateCategoryRequestAction,
 updateCategorySuccessAction} from "../actions/category.action";
import { initialState } from "../state/category.state";

const _categoryReducer = createReducer(
 initialState,

  on(getAllCategoriesRequestAction,(state,action)=>{
   return {...state,}
 }),
 on(getAllCategoriesSuccessAction,(state,action)=>{
   return {...state,}
 }),
 on(getAllCategoriesFailAction,(state,action)=>{
   return {...state,}
 }),

//##################################################################

 on(getAllCategoriesByIdRequestAction,(state,action)=>{
   return {...state,}
 }),
 on(getAllCategoriesByIdSuccessAction,(state,action)=>{
   return {...state,}
 }),
 on(getAllCategoriesByIdFailAction,(state,action)=>{
   return {...state,}
 }),

//##################################################################

 on(createCategoryRequestAction,(state,action)=>{
   return {...state,}
 }),
 on(createCategorySuccessAction,(state,action)=>{
   let cat = {...action.category}
   return {...state,action:cat}
 }),
 on(createCategoryFailAction,(state,action)=>{
   return {...state,}
 }),

//##################################################################

 on(updateCategoryRequestAction,(state,action)=>{
   return {...state,}
 }),
 on(updateCategorySuccessAction,(state,action)=>{

   let oldState = {...state}
   
   const updatedCategory = state.oldState.map((user)=>{
     return action.users.id === user.id? action.users : user
   })
   return {...state,updatedCategory}
 }),
 on(updateCategoryFailAction,(state,action)=>{
   return {...state,}
 }),
 
 //##################################################################

 on(deleteCategoryRequestAction,(state,action)=>{
   return {...state,}
 }),
 on(deleteCategorySuccessAction,(state,action)=>{
   return {...state,}
 }),
 on(deleteCategoryFailAction,(state,action)=>{
   return {...state,}
 }))

 //##################################################################

 export const categoryReducer = (state: Categories | undefined,action: Action)=>{
  return _categoryReducer(state,action)
 }