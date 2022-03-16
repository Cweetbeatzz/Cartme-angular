import { createAction, props } from "@ngrx/store";
import { Shared } from "src/app/models/shared/shared";
import { LOADING_ACTION } from "../constants/shared.constants";


export const setLoadingSpinner = createAction(LOADING_ACTION,props<{loading:Shared}>())