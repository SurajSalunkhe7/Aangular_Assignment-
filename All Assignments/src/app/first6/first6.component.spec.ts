import { ComponentFixture, TestBed } from '@angular/core/testing';

import { First6Component } from './first6.component';

describe('First6Component', () => {
  let component: First6Component;
  let fixture: ComponentFixture<First6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ First6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(First6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
