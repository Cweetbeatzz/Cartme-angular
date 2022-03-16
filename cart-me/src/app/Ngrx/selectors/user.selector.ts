import { createFeatureSelector, createSelector } from "@ngrx/store"
import { UserState } from "../state/user.state"

 const USER_STATE_NAME = 'users'

 const getUserState = createFeatureSelector<UserState>(USER_STATE_NAME)

 export const getUsers = createSelector(getUserState,(state)=>{
  return state.users
 })