import { TestBed } from '@angular/core/testing';

import { AtmLoginService } from './atm-login.service';

describe('AtmLoginService', () => {
  let service: AtmLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtmLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
