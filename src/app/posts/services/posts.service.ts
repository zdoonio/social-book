import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostsResponse } from '../interfaces/responses/posts-response.interface';
import {environment} from '../../../environments/environment';
import {filter, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Post} from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<PostsResponse>(environment.postsUrl);
  }

  getPostById(postId: string): Observable<Post> {
    return this.getPosts()
      .pipe(
        map((response) => {
          return response.posts;
        }),
        map((posts) => {
          return posts.filter((post) => {
            return (post.id === postId);
          });
        }),
        map(posts => posts[0])
      );
  }
}
