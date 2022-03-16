import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "../state/product.state";

const PRODUCT_STATE_NAME = 'products'
//##################################################################

const getProductState = createFeatureSelector<ProductState>(PRODUCT_STATE_NAME)

//##################################################################

export const getAllProductsSelector = createSelector(getProductState,(state) =>{
 return state.products
})

//##################################################################

export const getProductsByIdSelector = createSelector(getProductState,(state) =>{
})

//##################################################################