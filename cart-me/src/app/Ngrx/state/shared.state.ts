import { Loading } from "src/app/models/shared/loading";


export interface SharedState{
 showLoading:boolean
}


export const initialState:SharedState = {
 showLoading: false
}