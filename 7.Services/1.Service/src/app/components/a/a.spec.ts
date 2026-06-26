import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A } from './a';

describe('A', () => {
  let component: A;
  let fixture: ComponentFixture<A>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A],
    }).compileComponents();

    fixture = TestBed.createComponent(A);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
