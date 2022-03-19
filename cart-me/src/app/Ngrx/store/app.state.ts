import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { authReducer } from "../reducers/auth.reducers";
import { categoryReducer } from "../reducers/category.reducers";
import { productReducer } from "../reducers/product.reducers";
import { userReducer } from "../reducers/user.reducers";
import { AuthState } from "../state/auth.state";
import { CartState } from "../state/cart.state";
import { CategoryState } from "../state/category.state";
import { OrderState } from "../state/order.state";
import { ProductState } from "../state/product.state";
import { UserState } from "../state/user.state";


export interface AppState{
 //auth
 auth: AuthState,
 //users
 users: UserState
 //categories
 category:CategoryState
 //product
 product: ProductState
 //cart
 cart:CartState
 //order
 order:OrderState
 //router
 router:RouterReducerState
}

export const AppReducer = {
  //users
 users:userReducer,
 //categories
 category:categoryReducer,
 //product
 product: productReducer,
 //auth
 auth:authReducer,
 //router
 router:routerReducer
}