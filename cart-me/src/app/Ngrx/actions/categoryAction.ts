import { createAction, props } from "@ngrx/store"
import { Categories } from "src/app/models/Categories/categories"
import { 
 CATEGORY_CREATE_SUCCESS, 
 CATEGORY_DELETE_SUCCESS, 
 CATEGORY_DETAILS_SUCCESS, 
 CATEGORY_LIST_SUCCESS, 
 CATEGORY_UPDATE_SUCCESS } from "../constants/categoryConstants"


const getAllCategoriesAction = createAction(CATEGORY_LIST_SUCCESS,props<{category:Categories}>())

//#######################################################

const getAllCategoriesByIdAction = createAction(CATEGORY_DETAILS_SUCCESS,props<{category:Categories}>())

//#######################################################

const createCategoryAction = createAction(CATEGORY_CREATE_SUCCESS,props<{category:Categories}>())

//#######################################################

const updateCategoryAction = createAction(CATEGORY_UPDATE_SUCCESS,props<{category:Categories}>())

//#######################################################

const deleteCategoryAction = createAction(CATEGORY_DELETE_SUCCESS,props<{category:Categories}>())