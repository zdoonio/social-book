import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListItemComponent } from './post-list-item.component';
import {Post} from '../../interfaces/post.interface';
import {PostsService} from '../../../posts/services/posts.service';
import {HttpClientModule} from '@angular/common/http';
import {PostListComponent} from '../post-list/post-list.component';

describe('PostListItemComponent', () => {
  let component: PostListItemComponent;
  let fixture: ComponentFixture<PostListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostListComponent, PostListItemComponent],
      imports: [HttpClientModule],
      providers: [PostsService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.post = {
      author: {},
      images: []
    } as Post;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
