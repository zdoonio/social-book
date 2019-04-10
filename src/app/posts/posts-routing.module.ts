import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostPageComponent} from './pages/post-page/post-page.component';

const routes: Routes = [
  {
    path: ':postId',
    component: PostPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
