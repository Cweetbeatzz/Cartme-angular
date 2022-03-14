import { Login } from "src/app/models/Login/login";
import { loginUserReducer } from "../reducers/authReducers";
import { userListReducer } from "../reducers/userReducers";

//##################################################################

export interface AppState {
//auth
 auth: Login,
}
//##################################################################

export const appReducer = {
 //users
 userList: userListReducer,
 //categories
 category: categoryReducer,
 //product
 product: productReducer,
 //auth
 auth: loginUserReducer,
}