import { TestBed } from '@angular/core/testing';

import { BlodDataService } from './blod-data.service';

describe('BlodDataService', () => {
  let service: BlodDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlodDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
