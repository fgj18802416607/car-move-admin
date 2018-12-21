import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UmanagementComponent } from './umanagement/umanagement.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ShareModule } from '../../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    NgZorroAntdModule,
    ShareModule
  ],
  declarations: [UmanagementComponent]
})
export class UserManagementModule { }
