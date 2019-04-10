import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomePageComponent} from './home-page.component';
import {PostListComponent} from '../../../shared/components/post-list/post-list.component';
import {PostListItemComponent} from '../../../shared/components/post-list-item/post-list-item.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {PostsService} from '../../../posts/services/posts.service';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageComponent, PostListComponent, PostListItemComponent],
      imports: [HttpClientTestingModule],
      providers: [PostsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
