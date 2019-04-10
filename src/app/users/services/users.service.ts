import { Injectable } from '@angular/core';
import {PostsResponse} from '../../shared/interfaces/responses/posts-response.interface';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Post} from '../../shared/interfaces/post.interface';
import {catchError, delay, map} from 'rxjs/operators';
import {User} from '../../shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<PostsResponse>(environment.postsUrl)
      .pipe(
        map(response => response.posts),
        map(posts => {
          const users = posts.map((post) => {
            return post.author;
          });
          return users;
        })
      );
  }

  getUserById(userId: string): Observable<User> {
    return this.getUsers()
      .pipe(

        map((users) => {
          return users.find((user) => {
            return user.id === userId;
          });
        }),
        delay(2000),
        catchError(err =>{throw new Error(err)})
      );
  }
}
