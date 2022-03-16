import { Categories } from "src/app/models/Categories/categories";


export interface CategoryState{
 categories:Categories[]
}

export const initialState:Categories={
 name: ""
}