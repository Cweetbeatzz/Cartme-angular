import { Customers } from "src/app/models/Customers/customers";

export interface UserState{
 users:Customers[]
}

export const initialState:Customers ={
 Firstname: "",
 Lastname: "",
 Username: "",
 Email: "",
 Address: "",
 State: "",
 Country: "",
 Phone: 0,
 PostalCode: 0,
 Password: "",
 ConfirmPassword: ""
}