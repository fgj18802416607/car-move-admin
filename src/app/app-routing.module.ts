import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {NotImplementComponent} from './share/components/not-implement/not-implement.component';

const routes: Routes = [
  {path: 'login', component: NotImplementComponent},
  {
    path: '', component: AppComponent, children: [
      {path: '', redirectTo: '/main/home', pathMatch: 'full'},
      {
        path: 'main',
        component: NotImplementComponent,
      },
      {
        path: 'link',
        component: NotImplementComponent,
      },
      {
        path: 'management',
        component: NotImplementComponent,
      },
      {path: '**', redirectTo: '/main/home', pathMatch: 'full'},
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
