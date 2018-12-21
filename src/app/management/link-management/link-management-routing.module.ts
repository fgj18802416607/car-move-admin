import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LmanagementComponent } from './lmanagement/lmanagement.component';

const routes: Routes = [
  {
    path: '' , component : LmanagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinkManagementRoutingModule { }
