import { TestBed } from '@angular/core/testing';

import { PostsService } from './posts.service';
import {HttpClientModule} from '@angular/common/http';

describe('PostsService', () => {
  beforeEach(() =>
      TestBed.configureTestingModule({
        imports: [HttpClientModule],
      }),
    );

  it('should be created', () => {
    const service: PostsService = TestBed.get(PostsService);
    expect(service).toBeTruthy();
  });
});
