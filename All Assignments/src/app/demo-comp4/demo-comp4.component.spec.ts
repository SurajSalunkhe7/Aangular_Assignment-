import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComp4Component } from './demo-comp4.component';

describe('DemoComp4Component', () => {
  let component: DemoComp4Component;
  let fixture: ComponentFixture<DemoComp4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoComp4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoComp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
