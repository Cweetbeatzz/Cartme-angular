export interface CreateRole {
 id?:string,
 RoleName: string,
}

export interface Roles {
 id?:string,
 logicistics: boolean,
 manager: boolean,
 seller: boolean,
 buyer: boolean,
 admin: boolean,
}