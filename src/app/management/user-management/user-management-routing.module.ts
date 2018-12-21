import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UmanagementComponent } from './umanagement/umanagement.component';

const routes: Routes = [
  {
    path: '' , component : UmanagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
