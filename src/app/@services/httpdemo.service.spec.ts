import { TestBed } from '@angular/core/testing';

import { HttpdemoService } from './httpdemo.service';

describe('HttpdemoService', () => {
  let service: HttpdemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpdemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
