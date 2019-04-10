import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../../posts/services/posts.service';
import {Posts} from '../../../posts/interfaces/posts.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Posts = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.setupPosts();
  }

  trackPost(index: number) {
    return index;
  }

  private setupPosts() {
    this.postsService.getPosts()
      .subscribe({
        next: (response) => {
          this.posts = response.posts;
          console.log(response);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

}
