import { createFeatureSelector, createSelector } from "@ngrx/store"

export const AUTH_STATE_NAME = 'auth'

const getAuthState = createFeatureSelector<>(AUTH_STATE_NAME)

export const isAuthenticated = createSelector(getAuthState,(state)=>{
 return state.user?true:false
})


export const getToken = createSelector(getAuthState,(state)=>{
 return state.user?true:false
})