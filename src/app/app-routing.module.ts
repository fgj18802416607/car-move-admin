import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { LoginGuard } from './login.guard';
import {ManagementComponent} from "./management/management.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full', canActivate : [LoginGuard]},
  {path: 'login', component: UserLoginComponent , canActivate : [LoginGuard]},
  {path: 'main', component: AppComponent,
    children: [
      {path: '', redirectTo: 'index', pathMatch: 'full'},
      {
        path: 'index',
        loadChildren: './index/index.module#IndexModule'
      },
      {
        path: 'link',
        loadChildren: './link/link.module#LinkModule'
      },
      {
        path: 'management', component: ManagementComponent,
        children:[
          {path: '', redirectTo: 'linkManage', pathMatch: 'full'},
          {
            path: 'linkManage',
            loadChildren: './management/link-management/link-management.module#LinkManagementModule'
          },
          {
            path: 'userManage',
            loadChildren: './management/user-management/user-management.module#UserManagementModule'
          }
        ]}
      ]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
