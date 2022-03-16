import { Products } from "src/app/models/Products/products";


export interface ProductState{
products:Products[]
}

export const initialState:Products = {
 ChefName: "",
 MealName: "",
 Slug: "",
 Description: "",
 Image: "",
 Price: 0,
 FoodCategory: "",
 CategoryId: 0,
 ImageUpload: ""
}