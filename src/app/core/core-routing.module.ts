import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {SignUpPageComponent} from './pages/sign-up-page/sign-up-page.component';
import {SignInPageComponent} from './pages/sign-in-page/sign-in-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'posts',
    loadChildren: '../posts/posts.module#PostsModule'
  },
  {
    path: 'users',
    loadChildren: '../users/users.module#UsersModule'
  },
  {
    path: 'sign-in',
    component: SignInPageComponent,
  },
  {
    path: 'sign-up',
    component: SignUpPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
