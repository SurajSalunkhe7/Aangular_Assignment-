import { ComponentFixture, TestBed } from '@angular/core/testing';

import { First4Component } from './first4.component';

describe('First4Component', () => {
  let component: First4Component;
  let fixture: ComponentFixture<First4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ First4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(First4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
