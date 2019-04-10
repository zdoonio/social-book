import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListComponent } from './post-list.component';
import {PostListItemComponent} from '../post-list-item/post-list-item.component';
import {Post} from '../../interfaces/post.interface';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {PostsService} from '../../../posts/services/posts.service';

describe('PostListComponent', () => {
  let fixture: ComponentFixture<PostListComponent>;
  let component: PostListComponent;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListComponent, PostListItemComponent ],
      imports: [HttpClientTestingModule],
      providers: [PostsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });
});
