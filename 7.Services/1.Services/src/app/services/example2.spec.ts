import { TestBed } from '@angular/core/testing';

import { Example2 } from './example2';

describe('Example2', () => {
  let service: Example2;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Example2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
