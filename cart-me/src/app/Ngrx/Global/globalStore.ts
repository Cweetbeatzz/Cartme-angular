import { Login } from "src/app/models/Login/login";
import { loginUserReducer } from "../reducers/auth.reducers";
import { userListReducer } from "../reducers/user.reducers";

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