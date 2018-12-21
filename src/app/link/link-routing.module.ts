import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterLinkingComponent } from './inter-linking/inter-linking.component';
import { InterRecordComponent } from './inter-record/inter-record.component';
import { AllLinkComponent } from './all-link/all-link.component';

const routes: Routes = [
  {
    path: '' , component : AllLinkComponent,
    children: [
      {path: '', redirectTo: 'inter', pathMatch: 'full'},
      {path: 'inter', component: InterLinkingComponent},
      {path: 'record', component: InterRecordComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinkRoutingModule { }
