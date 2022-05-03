import { TestBed } from '@angular/core/testing';

import { NaturalistsService } from './naturalists.service';

describe('NaturalistsService', () => {
  let service: NaturalistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaturalistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
