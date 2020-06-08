import { TestBed } from '@angular/core/testing';

import { BibleVersionsService } from './bible-versions.service';

describe('BibleVersionsService', () => {
  let service: BibleVersionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibleVersionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
