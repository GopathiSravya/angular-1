import { TestBed } from '@angular/core/testing';

import { AtmLoginService } from './atm-login.service';
import expect from 'expect';
import { describe, beforeEach, it } from 'node:test';

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
