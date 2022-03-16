import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs/operators";
import { ProductsService } from "src/app/services/Product/products.service";
import { createCategorySuccessAction } from "../actions/category.action";
import { 
 createProductsRequestAction, 
 deleteProductsRequestAction, 
 deleteProductsSuccessAction, 
 getAllProductsByCategoryRequestAction, 
 getAllProductsByCategorySuccessAction, 
 getAllProductsRequestAction, 
 getAllProductsSuccessAction, 
 getProductsByIdRequestAction, 
 getProductsByIdSuccessAction, 
 updateProductsRequestAction, 
 updateProductsSuccessAction } from "../actions/product.actions";

@Injectable()

export class ProductEffects{
  //##########################################################

constructor (private action$: Actions, private productservice:ProductsService){}

  //##########################################################

 create$ = createEffect(() => {
  return this.action$.pipe(ofType(createProductsRequestAction),exhaustMap((action)=>{
   return this.productservice.UploadProduct(action.products).pipe(map((data)=> {
    const newProduct = this.productservice.UploadProduct(data)
    return createCategorySuccessAction({newProduct});
   }) )
  }))
 })
 //##########################################################

 getById$ = createEffect(() => {
  return this.action$.pipe(ofType(getProductsByIdRequestAction),exhaustMap((action)=>{
   return this.productservice.GetProductById(action.products).pipe(map((data)=> {
    const ProductsById = this.productservice.GetProductById(data)
    return getProductsByIdSuccessAction({ProductsById});
   }) )
  }))
 })
 //##########################################################

 get$ = createEffect(() => {
  return this.action$.pipe(ofType(getAllProductsRequestAction),exhaustMap((action)=>{
   return this.productservice.GetAllProduct(action.products).pipe(map((data)=> {
    const allProducts = this.productservice.GetAllProduct(data)
    return getAllProductsSuccessAction({allProducts});
   }) )
  }))
 })

  //##########################################################

 getByCategory$ = createEffect(() => {
  return this.action$.pipe(ofType(getAllProductsByCategoryRequestAction),exhaustMap((action)=>{
   return this.productservice.GetProductByCategory(action.products).pipe(map((data)=> {
    const allProductsByCategory = this.productservice.GetProductByCategory(data)
    return getAllProductsByCategorySuccessAction({allProductsByCategory});
   }) )
  }))
 })

 //##########################################################

 update$ = createEffect(() => {
  return this.action$.pipe(ofType(updateProductsRequestAction),exhaustMap((action)=>{
   return this.productservice.UpdateProduct(action.products).pipe(map((data)=> {
    const updateProduct = this.productservice.UpdateProduct(data)
    return updateProductsSuccessAction({updateProduct});
   }) )
  }))
 })

  //##########################################################

 delete$ = createEffect(() => {
  return this.action$.pipe(ofType(deleteProductsRequestAction),exhaustMap((action)=>{
   return this.productservice.DeleteProduct(action.products).pipe(map((data)=> {
    const deleteProduct = this.productservice.DeleteProduct(data)
    return deleteProductsSuccessAction({deleteProduct});
   }) )
  }))
 })

 //  search$ = createEffect(() => {
 //  return this.action$.pipe(ofType(deleteCategoryRequestAction),exhaustMap((action)=>{
 //   return this.categoryservice.DeleteCategory(action.category).pipe(map((data)=> {
 //    const deleteCategory = this.categoryservice.DeleteCategory(data)
 //    return deleteCategorySuccessAction({deleteCategory});
 //   }) )
 //  }))
 // })
}