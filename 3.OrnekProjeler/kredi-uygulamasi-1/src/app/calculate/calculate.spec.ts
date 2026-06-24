import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculate } from './calculate';

describe('Calculate', () => {
  let component: Calculate;
  let fixture: ComponentFixture<Calculate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calculate],
    }).compileComponents();

    fixture = TestBed.createComponent(Calculate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
