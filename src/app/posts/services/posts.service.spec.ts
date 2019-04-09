import { TestBed } from '@angular/core/testing';

import { PostsService } from './posts.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../../environments/environment';
import * as Ajv from 'ajv';
import * as SCHEME from '../../../schemas/post.scheme.json'

function fakePost() {
  return {
    id: '',
    created_time: '',
    author: {
      id: '',
      name: '',
      avatar_url: '',
    },
    body: '',
    images: {},
  };
}

describe('PostsService', () => {
  let service: PostsService = null;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.get(PostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should returns list of posts', () => {
    service.getPosts()
      .subscribe({
        next: (response) => {
          expect(response.posts.length).toEqual(2);
        }
      });
    const httpMock = TestBed.get(HttpTestingController);
    httpMock.expectOne(environment.postsUrl).flush([1, 2]);
  });

  it('should returns response invalid with schema', () => {
    const ajv = new Ajv();
    const validator = ajv.compile(SCHEME});
    service.getPosts()
      .subscribe({
        next: (response) => {
          const isValid = validator(response);
          expect(isValid).toEqual(true);
      }
      });

    const httpMock = TestBed.get(HttpTestingController);
    httpMock.expectOne(environment.postsUrl).flush(Array.from({length: 5}).map(fakePost));
  });



});
