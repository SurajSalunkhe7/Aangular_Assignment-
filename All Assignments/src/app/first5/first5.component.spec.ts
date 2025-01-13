import { ComponentFixture, TestBed } from '@angular/core/testing';

import { First5Component } from './first5.component';

describe('First5Component', () => {
  let component: First5Component;
  let fixture: ComponentFixture<First5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ First5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(First5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
