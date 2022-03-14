import { createReducer, on } from "@ngrx/store";
import { getAllCategoriesSuccessAction } from "../actions/categoryAction";
import { initialState } from "../state/categoryState";

const _categoryReducer = createReducer(initialState,on(getAllCategoriesSuccessAction,(state,action)=>{
 return {...state}
}))