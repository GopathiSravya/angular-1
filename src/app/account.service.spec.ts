import { TestBed } from '@angular/core/testing';

import { AccountService } from './account.service';
import expect from 'expect';
import { describe, beforeEach, it } from 'node:test';

describe('AccountService', () => {
  let service: AccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
