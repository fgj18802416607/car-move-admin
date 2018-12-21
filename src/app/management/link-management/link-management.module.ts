import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkManagementRoutingModule } from './link-management-routing.module';
import { LmanagementComponent } from './lmanagement/lmanagement.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ShareModule } from '../../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    LinkManagementRoutingModule,
    NgZorroAntdModule,
    ShareModule
  ],
  declarations: [LmanagementComponent]
})
export class LinkManagementModule { }
