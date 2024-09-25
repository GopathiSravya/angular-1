import { TestBed } from '@angular/core/testing';

import { LoansearchService } from './loansearch.service';
import expect from 'expect';
import { describe, beforeEach, it } from 'node:test';

describe('LoansearchService', () => {
  let service: LoansearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoansearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});