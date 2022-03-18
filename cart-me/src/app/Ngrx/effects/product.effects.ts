import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, mergeMap } from "rxjs/operators";
import { ProductsService } from "src/app/services/Product/products.service";
import { 
 createProductsRequestAction, 
 createProductsSuccessAction, 
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
    const newProduct = {...action.products}
    return createProductsSuccessAction({products:newProduct});
   }) )
  }))
 })
 //##########################################################

 getById$ = createEffect(() => {
  return this.action$.pipe(ofType(getProductsByIdRequestAction),exhaustMap((action)=>{
   return this.productservice.GetProductById(action.id).pipe(map((data)=> {
    return getProductsByIdSuccessAction({id:action.id});
   }) )
  }))
 })
 //##########################################################

 get$ = createEffect(() => {
  return this.action$.pipe(ofType(getAllProductsRequestAction),mergeMap((action)=>{
   return this.productservice.GetAllProduct().pipe(map((products)=> {
    return getAllProductsSuccessAction({products});
   }) )
  }))
 })

  //##########################################################

//  getByCategory$ = createEffect(() => {
//   return this.action$.pipe(ofType(getAllProductsByCategoryRequestAction),exhaustMap((action)=>{
//    return this.productservice.GetProductByCategory(action.products).pipe(map((data)=> {
//     return getAllProductsByCategorySuccessAction({allProductsByCategory});
//    }) )
//   }))
//  })

 //##########################################################

 update$ = createEffect(() => {
  return this.action$.pipe(ofType(updateProductsRequestAction),exhaustMap((action)=>{
   return this.productservice.UpdateProduct(action.products).pipe(map((data)=> {
    return updateProductsSuccessAction({products:action.products});
   }) )
  }))
 })

  //##########################################################

 delete$ = createEffect(() => {
  return this.action$.pipe(ofType(deleteProductsRequestAction),exhaustMap((action)=>{
   return this.productservice.DeleteProduct(action.id).pipe(map((data)=> {
    return deleteProductsSuccessAction({id:action.id});
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