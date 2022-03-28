import { Photo } from "./photo"

export interface Products {
 id?:string,
 chefName: string  
 mealName: string 
 slug?: string  
 description: string  
 image: string  
 price: number 
 foodCategory: string  
 categoryId: number
 photos?: Photo[]  
}
