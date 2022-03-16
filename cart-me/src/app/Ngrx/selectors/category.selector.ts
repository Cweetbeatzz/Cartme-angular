import { createFeatureSelector, createSelector } from "@ngrx/store"
import { CategoryState } from "../state/category.state"

const CATEGORY_STATE_NAME = 'category'

const getCategoryState = createFeatureSelector<CategoryState>(CATEGORY_STATE_NAME)

export const getCategory = createSelector(getCategoryState,(state)=>{
 return state.categories
})