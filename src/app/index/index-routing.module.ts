import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserIndexComponent } from './user-index/user-index.component';
import { IndexContentComponent } from './index-content/index-content.component';

const routes: Routes = [
  {
    path: '' , component : UserIndexComponent,
    children: [
      {path: '', redirectTo: 'indexContent', pathMatch: 'full'},
      {path: 'indexContent', component: IndexContentComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
