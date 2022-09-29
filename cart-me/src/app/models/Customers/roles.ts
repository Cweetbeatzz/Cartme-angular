export interface CreateRole {
 id?: string,
 RoleName: string,
}

export interface GetRoles {
 id?: string,
 RoleName: boolean,

}
export interface Roles {
 id?: string,
 logicistics: boolean,
 manager: boolean,
 seller: boolean,
 buyer: boolean,
 admin: boolean,
}