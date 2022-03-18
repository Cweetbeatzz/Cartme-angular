import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, mergeMap } from "rxjs/operators";
import { CategoriesService } from "src/app/services/Categories/categories.service";
import { 
 createCategoryRequestAction,
 createCategorySuccessAction,
 deleteCategoryRequestAction,
 deleteCategorySuccessAction,
 getAllCategoriesByIdRequestAction,
 getAllCategoriesByIdSuccessAction,
 getAllCategoriesRequestAction, 
 getAllCategoriesSuccessAction, 
 updateCategoryRequestAction, 
 updateCategorySuccessAction} from "../actions/category.action";


@Injectable()

export class CategoryEffects{
  //##########################################################

constructor (private action$: Actions, private categoryservice:CategoriesService){}

  //##########################################################

 create$ = createEffect(() => {
  return this.action$.pipe(ofType(createCategoryRequestAction),exhaustMap((action)=>{
   return this.categoryservice.UploadCategory(action.category).pipe(map((data)=> {
    const newCategory = {...action.category}
    return createCategorySuccessAction({category:newCategory});
   }) )
  }))
 })
 //##########################################################

 getById$ = createEffect(() => {
  return this.action$.pipe(ofType(getAllCategoriesByIdRequestAction),exhaustMap((action)=>{
   return this.categoryservice.GetCategoryById(action.id).pipe(map((data)=> {
    return getAllCategoriesByIdSuccessAction({id:action.id});
   }) )
  }))
 })
 //##########################################################

 get$ = createEffect(() => {
  return this.action$.pipe(ofType(getAllCategoriesRequestAction),mergeMap((action)=>{
   return this.categoryservice.GetAllCategory().pipe(map((category) => {
    return getAllCategoriesSuccessAction({category});
   }) )
  }))
 })
 //##########################################################

 update$ = createEffect(() => {
  return this.action$.pipe(ofType(updateCategoryRequestAction),exhaustMap((action)=>{
   return this.categoryservice.UpdateCategory(action.category).pipe(map((data)=> {
    return updateCategorySuccessAction({category:action.category});
   }) )
  }))
 })

  //##########################################################

 delete$ = createEffect(() => {
  return this.action$.pipe(ofType(deleteCategoryRequestAction),exhaustMap((action)=>{
   return this.categoryservice.DeleteCategory(action.id).pipe(map((data)=> {
    return deleteCategorySuccessAction({id:action.id});
   }) )
  }))
 })

}