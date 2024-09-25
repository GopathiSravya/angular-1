import { TestBed } from '@angular/core/testing';

import { UserregisterService } from './userregister.service';
import { beforeEach, describe, it } from 'node:test';
import expect from 'expect';

describe('UserregisterService', () => {
  let service: UserregisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserregisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
