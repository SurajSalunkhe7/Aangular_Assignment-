import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComp9Component } from './demo-comp9.component';

describe('DemoComp9Component', () => {
  let component: DemoComp9Component;
  let fixture: ComponentFixture<DemoComp9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoComp9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoComp9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
