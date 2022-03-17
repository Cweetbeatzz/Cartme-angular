import { createFeatureSelector, createSelector } from "@ngrx/store"
import { CategoryState } from "../state/category.state"

export const CATEGORY_STATE_NAME = 'category'

const getCategoryState = createFeatureSelector<CategoryState>(CATEGORY_STATE_NAME)

export const getCategory = createSelector(getCategoryState,(state)=>{
 return state.categories
})

export const getCategoryById = createSelector(getCategoryState,(state: { categories: { [x: string]: any } },props:any)=>{
 return state.categories.find((category: any) => category.id === props.id)
})

export const delCategoryById = createSelector(getCategoryState,(state)=>{
 
})