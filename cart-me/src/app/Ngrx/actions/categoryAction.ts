import { createAction, props } from "@ngrx/store"
import { Categories } from "src/app/models/Categories/categories"
import { 
 CATEGORY_CREATE_FAIL,
 CATEGORY_CREATE_REQUEST,
 CATEGORY_CREATE_SUCCESS, 
 CATEGORY_DELETE_FAIL, 
 CATEGORY_DELETE_REQUEST, 
 CATEGORY_DELETE_SUCCESS, 
 CATEGORY_DETAILS_FAIL, 
 CATEGORY_DETAILS_REQUEST, 
 CATEGORY_DETAILS_SUCCESS, 
 CATEGORY_LIST_FAIL, 
 CATEGORY_LIST_REQUEST, 
 CATEGORY_LIST_SUCCESS, 
 CATEGORY_UPDATE_FAIL, 
 CATEGORY_UPDATE_REQUEST, 
 CATEGORY_UPDATE_SUCCESS } from "../constants/categoryConstants"


export const getAllCategoriesRequestAction = createAction(CATEGORY_LIST_REQUEST,props<{category:Categories}>())
export const getAllCategoriesSuccessAction = createAction(CATEGORY_LIST_SUCCESS,props<{category:Categories}>())
export const getAllCategoriesFailAction = createAction(CATEGORY_LIST_FAIL,props<{category:Categories}>())

//#######################################################

export const getAllCategoriesByIdRequestAction = createAction(CATEGORY_DETAILS_REQUEST,props<{category:Categories}>())
export const getAllCategoriesByIdSuccessAction = createAction(CATEGORY_DETAILS_SUCCESS,props<{category:Categories}>())
export const getAllCategoriesByIdFailAction = createAction(CATEGORY_DETAILS_FAIL,props<{category:Categories}>())

//#######################################################

export const createCategoryRequestAction = createAction(CATEGORY_CREATE_REQUEST,props<{category:Categories}>())
export const createCategorySuccessAction = createAction(CATEGORY_CREATE_SUCCESS,props<{category:Categories}>())
export const createCategoryFailAction = createAction(CATEGORY_CREATE_FAIL,props<{category:Categories}>())

//#######################################################

export const updateCategoryRequestAction = createAction(CATEGORY_UPDATE_REQUEST,props<{category:Categories}>())
export const updateCategorySuccessAction = createAction(CATEGORY_UPDATE_SUCCESS,props<{category:Categories}>())
export const updateCategoryFailAction = createAction(CATEGORY_UPDATE_FAIL,props<{category:Categories}>())

//#######################################################

export const deleteCategoryRequestAction = createAction(CATEGORY_DELETE_REQUEST,props<{category:Categories}>())
export const deleteCategorySuccessAction = createAction(CATEGORY_DELETE_SUCCESS,props<{category:Categories}>())
export const deleteCategoryFailAction = createAction(CATEGORY_DELETE_FAIL,props<{category:Categories}>())