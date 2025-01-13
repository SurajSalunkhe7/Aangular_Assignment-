import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComp7Component } from './demo-comp7.component';

describe('DemoComp7Component', () => {
  let component: DemoComp7Component;
  let fixture: ComponentFixture<DemoComp7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoComp7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoComp7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
