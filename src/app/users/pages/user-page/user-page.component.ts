import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../../services/users.service';
import {User} from '../../../shared/interfaces/user.interface';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  user: User = null;
  error = null;

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setupUser();
  }

  private setupUser() {
    const userId = this.route.snapshot.params.userId;
    this.userService.getUserById(userId).subscribe({
      next: (response) => {
        this.user = response;
      },
      error: (err) => {
        console.log(err);
        this.error = err;
      }
    });
  }

}
