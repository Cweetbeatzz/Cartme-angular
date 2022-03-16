import { createFeatureSelector, createSelector } from "@ngrx/store"

export const SHARED_STATE_NAME = 'shared'

 const getSharedState = createFeatureSelector(SHARED_STATE_NAME)

 export const getUsers = createSelector(getSharedState,(state)=>{
  return state
 })