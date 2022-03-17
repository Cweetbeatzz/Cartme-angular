import { Customers } from "src/app/models/Customers/customers";

export interface UserState{
 users:Customers[]
}

export const initialState:UserState ={
 users: []
}