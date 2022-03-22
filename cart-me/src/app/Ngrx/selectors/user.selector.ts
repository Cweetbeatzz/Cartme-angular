import { createFeatureSelector, createSelector } from "@ngrx/store"
import { UserState } from "../state/user.state"
import { RouteStateUrl } from "../store/router/custom.seralizer"
import { getCurrentRoute } from "../store/router/router.selector"

 const USER_STATE_NAME = 'users'

//##################################################################


 const getUserState = createFeatureSelector<UserState>(USER_STATE_NAME)
 
//##################################################################

 export const getUsers = createSelector(getUserState,(state)=>{
  return state.users
 })

//##################################################################

export const getUserById = createSelector(getUsers,getCurrentRoute,(users,route:RouteStateUrl)=>{
 return users.find((users) => users.id === route.params['id'])
})