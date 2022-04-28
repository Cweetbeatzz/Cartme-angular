import { Params, RouterStateSnapshot } from "@angular/router"
import { RouterStateSerializer } from "@ngrx/router-store"

export interface RouteStateUrl{
 url:string
 params:Params
 queryParams:Params
}

export class CustomSeralizer implements RouterStateSerializer<RouteStateUrl>{
 serialize(routerState: RouterStateSnapshot): RouteStateUrl {
  let route = routerState.root;

  while (route.firstChild) {
   route = route.firstChild
  }

  const {url,root:{queryParams}} = routerState
  const {params} = route

  return {url,params,queryParams}

 }
 
}