import { describe, it } from 'node:test';
import { MaskDirective } from './mask.directive';
import expect from 'expect';

describe('MaskDirective', () => {
  it('should create an instance', () => {
    const directive = new MaskDirective();
    expect(directive).toBeTruthy();
  });
});
