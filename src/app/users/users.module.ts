import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './pages/user-page/user-page.component';
import {SharedModule} from '../shared/shared.module';
import {UsersRoutingModule} from './users-routing.module';
import {UsersService} from './services/users.service';

@NgModule({
  declarations: [UserPageComponent],
  exports: [UserPageComponent],
  imports: [
    CommonModule, UsersRoutingModule, SharedModule
  ],
  providers: [
    UsersService
  ],
})
export class UsersModule { }

