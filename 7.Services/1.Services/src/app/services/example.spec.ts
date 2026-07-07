import { TestBed } from '@angular/core/testing';

import { Example } from './example';

describe('Example', () => {
  let service: Example;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Example);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
