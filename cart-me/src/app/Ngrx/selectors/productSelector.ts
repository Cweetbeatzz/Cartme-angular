import { createFeatureSelector, createSelector } from "@ngrx/store";

//##################################################################

const getProductState = createFeatureSelector<>('products')

//##################################################################

export const getAllProductsSelector = createSelector(getProductState,(state) =>{
})

//##################################################################

export const getProductsByIdSelector = createSelector(getProductState,(state: any,props: any) =>{
})

//##################################################################