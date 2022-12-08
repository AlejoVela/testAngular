import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ListUsersComponent } from './user/list-users/list-users.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterUserComponent } from './user/register-user/register-user.component';

const routes: Routes = [
  {
    path: "list-user",
    component: ListUsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "register",
    component: RegisterUserComponent,
    pathMatch: 'full'
  },
  {
    path: "login",
    component: LoginComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
