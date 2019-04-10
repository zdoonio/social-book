import { Injectable } from '@angular/core';
import {HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpSentEvent, HttpUserEvent} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CacheManagerService {

  private cache = new Map();

  constructor() { }

  save(url: string, response: HttpSentEvent | HttpHeaderResponse | HttpResponse<any> | HttpProgressEvent | HttpUserEvent<any>) {
    this.cache.set(url, response);
  }

  has(url: string) {
    return this.cache.has(url);
  }

  get(url: string) {
    return this.cache.get(url);
  }

}
