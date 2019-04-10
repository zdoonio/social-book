import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../../services/users.service';
import {User} from '../../../shared/interfaces/user.interface';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit, OnDestroy {

  user: User = null;
  error = null;

  user$: Observable<User> = null;
  destroy$ = new Subject();

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setupUser();
  }

  ngOnDestroy() {
    this.destroy$.next(null);
  }

  private setupUser() {
    const userId = this.route.snapshot.params.userId;
    this.userService.getUserById(userId)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
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
