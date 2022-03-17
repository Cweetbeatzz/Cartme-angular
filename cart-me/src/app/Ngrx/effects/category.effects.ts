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
    const newCategory = this.categoryservice.UploadCategory(data)
    return createCategorySuccessAction({newCategory});
   }) )
  }))
 })
 //##########################################################

 getById$ = createEffect(() => {
  return this.action$.pipe(ofType(getAllCategoriesByIdRequestAction),exhaustMap((action)=>{
   return this.categoryservice.GetCategoryById(action.category).pipe(map((data)=> {
    const allCategoriesById = this.categoryservice.GetCategoryById(data)
    return getAllCategoriesByIdSuccessAction({allCategoriesById});
   }) )
  }))
 })
 //##########################################################

 get$ = createEffect(() => {
  return this.action$.pipe(ofType(getAllCategoriesRequestAction),mergeMap((action)=>{
   return this.categoryservice.GetAllCategory().pipe(map((data)=> {
    return getAllCategoriesSuccessAction({data});
   }) )
  }))
 })
 //##########################################################

 update$ = createEffect(() => {
  return this.action$.pipe(ofType(updateCategoryRequestAction),exhaustMap((action)=>{
   return this.categoryservice.UpdateCategory(action.category).pipe(map((data)=> {
    const updateCategory = this.categoryservice.UpdateCategory(data)
    return updateCategorySuccessAction({updateCategory});
   }) )
  }))
 })

  //##########################################################

 delete$ = createEffect(() => {
  return this.action$.pipe(ofType(deleteCategoryRequestAction),exhaustMap((action)=>{
   return this.categoryservice.DeleteCategory(action.category).pipe(map((data)=> {
    const deleteCategory = this.categoryservice.DeleteCategory(data)
    return deleteCategorySuccessAction({deleteCategory});
   }) )
  }))
 })

}