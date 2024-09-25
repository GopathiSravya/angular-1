import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansearchComponent } from './loansearch.component';
import expect from 'expect';
import { describe, beforeEach, it } from 'node:test';

describe('LoansearchComponent', () => {
  let component: LoansearchComponent;
  let fixture: ComponentFixture<LoansearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoansearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoansearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
