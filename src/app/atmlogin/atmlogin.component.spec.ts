import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmloginComponent } from './atmlogin.component';
import { beforeEach, describe, it } from 'node:test';
import expect from 'expect';

describe('AtmloginComponent', () => {
  let component: AtmloginComponent;
  let fixture: ComponentFixture<AtmloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtmloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtmloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
