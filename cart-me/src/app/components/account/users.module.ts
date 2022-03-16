import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AdminAccessGuard } from "src/app/Guard/admin-access.guard";
import { AdminComponent } from "./admin/admin.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserRolesComponent } from './user-roles/user-roles.component';

const routes:Routes = [
   {
    path:'',
    component:RegisterComponent,
    children:[
    {
      path: 'login', component: LoginComponent
    },
    {
      path: 'register', component: RegisterComponent
    },
    {
      path: 'admin', component: AdminComponent, canActivate:[AdminAccessGuard]
    },
    ]
    
   }
]

@NgModule({
 declarations:[
  RegisterComponent,
     LoginComponent,
     AdminComponent,
     UserEditComponent,
     UserDeleteComponent,
     UserUpdateComponent,
     UserRolesComponent,
 ],
 imports:[CommonModule,ReactiveFormsModule, FormsModule,RouterModule.forChild(routes),]
})

export class UserModule{}