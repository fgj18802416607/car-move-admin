import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkRoutingModule } from './link-routing.module';
import { InterLinkingComponent } from './inter-linking/inter-linking.component';
import { InterRecordComponent } from './inter-record/inter-record.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AllLinkComponent } from './all-link/all-link.component';

@NgModule({
  imports: [
    CommonModule,
    LinkRoutingModule,
    NgZorroAntdModule
  ],
  declarations: [InterLinkingComponent, InterRecordComponent, AllLinkComponent]
})
export class LinkModule { }
