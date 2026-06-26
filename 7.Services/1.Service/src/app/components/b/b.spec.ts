import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B } from './b';

describe('B', () => {
  let component: B;
  let fixture: ComponentFixture<B>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [B],
    }).compileComponents();

    fixture = TestBed.createComponent(B);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
