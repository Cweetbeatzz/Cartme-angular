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
import { UserRolesComponent } from './user-roles/user-roles.component';
import { UsersComponent } from './users/users.component';
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "src/app/Ngrx/effects/auth.effects";
import { UserEffects } from "src/app/Ngrx/effects/user.effects";
import { UserChangePasswordComponent } from './user-change-password/user-change-password.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { EmailConfirmComponent } from './email-confirm/email-confirm.component';
import { AccountComponent } from './account.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PricingComponent } from './pricing/pricing.component';

const routes:Routes = [
   //default path
   {path:'',redirectTo:'account/register',pathMatch:'full'},
   
   {
    path:'account',
    component: AccountComponent,
    children:[
    {
      path: 'login', component: LoginComponent
    },
    {
      path: 'users', component: UsersComponent
    },
    {
      path: 'register', component: SignUpComponent
    },
    {
      path: 'editUser', component: UserEditComponent
    },
    {
      path: 'users', component: UsersComponent
    },
    {
      path: 'deleteUser', component: UserDeleteComponent
    },
    {
      path: 'rolesUser', component: UserRolesComponent
    },
    {
      path: 'admin', component: AdminComponent, canActivate:[AdminAccessGuard]
    },
    ]
    
   }
]

@NgModule({
 declarations:[
    // RegisterComponent,
    //  LoginComponent,
    //  AdminComponent,
    //  UserEditComponent,
    //  UserDeleteComponent,
    //  UserRolesComponent,
    //  UsersComponent,
    //  UserChangePasswordComponent,
    //  UserDashboardComponent,
    // EmailConfirmComponent,
    // AccountComponent
    // SignUpComponent
  
    PricingComponent
  ],
 imports:[CommonModule,
  ReactiveFormsModule, FormsModule,RouterModule.forChild(routes),
  EffectsModule.forFeature([AuthEffects,UserEffects])]
})

export class UserModule{}