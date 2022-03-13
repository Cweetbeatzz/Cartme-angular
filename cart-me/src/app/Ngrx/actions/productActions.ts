import { createAction, props } from "@ngrx/store";
import { Products } from "src/app/models/Products/products";
import { 
 PRODUCT_CATEGORY_LIST_SUCCESS,
 PRODUCT_CREATE_SUCCESS,
  PRODUCT_DELETE_SUCCESS, 
  PRODUCT_DETAILS_SUCCESS,
   PRODUCT_LIST_SUCCESS, 
   PRODUCT_UPDATE_SUCCESS } from "../constants/productConstants";


const getAllProductsAction = createAction(PRODUCT_LIST_SUCCESS,props<{products:Products}>())

//#######################################################

const getAllProductsByCategoryAction = createAction(PRODUCT_CATEGORY_LIST_SUCCESS,props<{products:Products}>())

//#######################################################

const getProductsByIdAction = createAction(PRODUCT_DETAILS_SUCCESS,props<{products:Products}>())

//#######################################################

const createProductsAction = createAction(PRODUCT_CREATE_SUCCESS,props<{products:Products}>())

//#######################################################

const updateProductsAction = createAction(PRODUCT_UPDATE_SUCCESS,props<{products:Products}>())

//#######################################################

const deleteProductsAction = createAction(PRODUCT_DELETE_SUCCESS,props<{products:Products}>())