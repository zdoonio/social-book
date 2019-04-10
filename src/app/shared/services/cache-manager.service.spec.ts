import { TestBed } from '@angular/core/testing';

import { CacheManagerService } from './cache-manager.service';

describe('CacheManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CacheManagerService = TestBed.get(CacheManagerService);
    expect(service).toBeTruthy();
  });
});
