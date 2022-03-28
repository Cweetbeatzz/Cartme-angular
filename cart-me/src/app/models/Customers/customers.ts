import { Roles } from "./roles";

export interface Customers {
 id?:string,
 firstname: string,
 lastname: string,
 userName: string,
 email: string,
 address: string,
 state: string,
 country: string,
 Phone: number,
 postalCode: number,
 Password: string,
 ConfirmPassword?: string,
 roles?:Roles[]
}
