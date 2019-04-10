import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserPageComponent} from './pages/user-page/user-page.component';

const routes: Routes = [
  {
    path: ':userId',
    component: UserPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
