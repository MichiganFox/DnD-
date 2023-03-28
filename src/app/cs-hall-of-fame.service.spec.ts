import { TestBed } from '@angular/core/testing';

import { CsHallOfFameService } from './cs-hall-of-fame.service';

describe('CsHallOfFameService', () => {
  let service: CsHallOfFameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsHallOfFameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
