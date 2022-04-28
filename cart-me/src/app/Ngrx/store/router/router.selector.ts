import { RouterReducerState } from "@ngrx/router-store"
import { createFeatureSelector, createSelector } from "@ngrx/store"
import { RouteStateUrl } from "./custom.seralizer"

export const ROUTER_STATE_NAME = 'router'

//##################################################################

 const getRouterState = createFeatureSelector<RouterReducerState<RouteStateUrl>>(ROUTER_STATE_NAME)

//##################################################################


 export const getCurrentRoute = createSelector(getRouterState,(router)=>{
  return router.state
 })