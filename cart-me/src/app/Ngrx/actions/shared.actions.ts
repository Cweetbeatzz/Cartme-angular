import { createAction, props } from "@ngrx/store";
import { Loading } from "src/app/models/shared/loading";
import { LOADING_ACTION } from "../constants/shared.constants";


export const setLoadingSpinner = createAction(LOADING_ACTION,props<{status:boolean}>())