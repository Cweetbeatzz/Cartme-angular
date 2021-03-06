import { Action, createReducer, on } from "@ngrx/store";
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
import { CategoryState, initialState } from "../state/category.state";

const _categoryReducer = createReducer(
 initialState,

  on(getAllCategoriesRequestAction,(state,action)=>{
   return {...state,}
 }),
 on(getAllCategoriesSuccessAction,(state,action)=>{
   return {...state,action:action.category}
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
   return {...state,category:[...state.categories]}
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
   
   const updatedCategory = state.categories.map((user) => {
     return action.category.id === user.id? action.category : user
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
 on(deleteCategorySuccessAction,(state,{id})=>{
   //
   const deleteCategory = state.categories.filter((cat)=>{
     return id !== cat.id
   })
   return {...state,categories:deleteCategory}
 }),
 on(deleteCategoryFailAction,(state,action)=>{
   return {...state,}
 }))

 //##################################################################

 export const categoryReducer = (state: CategoryState | undefined,action: Action)=>{
  return _categoryReducer(state,action)
 }