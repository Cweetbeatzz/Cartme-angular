import { createAction, props } from "@ngrx/store";
import { Products } from "src/app/models/Products/products";
import { 
   PRODUCT_CATEGORY_LIST_FAIL,
   PRODUCT_CATEGORY_LIST_REQUEST,
 PRODUCT_CATEGORY_LIST_SUCCESS,
 PRODUCT_CREATE_FAIL,
 PRODUCT_CREATE_REQUEST,
 PRODUCT_CREATE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS, 
  PRODUCT_DETAILS_FAIL, 
  PRODUCT_DETAILS_REQUEST, 
  PRODUCT_DETAILS_SUCCESS,
   PRODUCT_LIST_FAIL,
   PRODUCT_LIST_REQUEST,
   PRODUCT_LIST_SUCCESS, 
   PRODUCT_UPDATE_FAIL, 
   PRODUCT_UPDATE_REQUEST, 
   PRODUCT_UPDATE_SUCCESS } from "../constants/product.constants";


export const getAllProductsRequestAction = createAction(PRODUCT_LIST_REQUEST,)
export const getAllProductsSuccessAction = createAction(PRODUCT_LIST_SUCCESS,props<{products:Products[]}>())
export const getAllProductsFailAction = createAction(PRODUCT_LIST_FAIL,props<{products:Products}>())
 
 //#######################################################
 
export const getAllProductsByCategoryRequestAction = createAction(PRODUCT_CATEGORY_LIST_REQUEST,props<{products:Products}>())
export const getAllProductsByCategorySuccessAction = createAction(PRODUCT_CATEGORY_LIST_SUCCESS,props<{products:Products[]}>())
export const getAllProductsByCategoryFailAction = createAction(PRODUCT_CATEGORY_LIST_FAIL,props<{products:Products}>())

//#######################################################

export const getProductsByIdRequestAction = createAction(PRODUCT_DETAILS_REQUEST,props<{id:string}>())
export const getProductsByIdSuccessAction = createAction(PRODUCT_DETAILS_SUCCESS,props<{id:string}>())
export const getProductsByIdFailAction = createAction(PRODUCT_DETAILS_FAIL,props<{id:string}>())
 
 //#######################################################
 
export const createProductsRequestAction = createAction(PRODUCT_CREATE_REQUEST,props<{products:Products}>())
export const createProductsSuccessAction = createAction(PRODUCT_CREATE_SUCCESS,props<{products:Products}>())
export const createProductsFailAction = createAction(PRODUCT_CREATE_FAIL,props<{products:Products}>())
 
 //#######################################################
 
export const updateProductsRequestAction = createAction(PRODUCT_UPDATE_REQUEST,props<{products:Products}>())
export const updateProductsSuccessAction = createAction(PRODUCT_UPDATE_SUCCESS,props<{products:Products}>())
export const updateProductsFailAction = createAction(PRODUCT_UPDATE_FAIL,props<{products:Products}>())
 
 //#######################################################
 
export const deleteProductsRequestAction = createAction(PRODUCT_DELETE_REQUEST,props<{id:string}>())
export const deleteProductsSuccessAction = createAction(PRODUCT_DELETE_SUCCESS,props<{id:string}>())
export const deleteProductsFailAction = createAction(PRODUCT_DELETE_FAIL,props<{id:string}>())