import { Login } from "src/app/models/Login/login";

export interface AuthState{
auth:Login[]
}

export const initialState :Login ={
 Password: "",
 Email: ""
};