import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Data} from '@angular/router/src/config';
import {PostsResponse } from '../interfaces/responses/posts-response.interface';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<PostsResponse>(environment.postsUrl );
  }
}
