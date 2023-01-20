import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AdminAccessGuard } from "src/app/Guard/admin-access.guard";
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
import { LoggedInGuard } from "src/app/Guard/logged-in.guard";

const routes: Routes = [
  //default path
  { path: '', redirectTo: 'account/register', pathMatch: 'full' },

  {
    path: '',
    children: [
      { path: '', component: UsersComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent, },
      { path: 'editUser', component: UserEditComponent, canActivate: [LoggedInGuard] },
      { path: 'deleteUser', component: UserDeleteComponent, canActivate: [LoggedInGuard] },
      { path: 'rolesUser', component: UserRolesComponent, canActivate: [LoggedInGuard, AdminAccessGuard] },
      { path: 'dashboard', component: UserDashboardComponent, canActivate: [LoggedInGuard] },
      { path: 'email-confirmed', component: EmailConfirmComponent, canActivate: [LoggedInGuard] },
    ]
  },
]

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    UserEditComponent,
    UserDeleteComponent,
    UserRolesComponent,
    UsersComponent,
    UserChangePasswordComponent,
    UserDashboardComponent,
    EmailConfirmComponent,
    AccountComponent,
    SignUpComponent,
    PricingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule, RouterModule.forChild(routes),
    EffectsModule.forFeature([AuthEffects, UserEffects]),
  ]
})

export class UserModule { }