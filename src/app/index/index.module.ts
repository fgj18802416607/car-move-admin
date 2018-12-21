import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { UserIndexComponent } from './user-index/user-index.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { IndexContentComponent } from './index-content/index-content.component';

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    NgZorroAntdModule
  ],
  declarations: [UserIndexComponent, IndexContentComponent],
})
export class IndexModule { }
