import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComp8Component } from './demo-comp8.component';

describe('DemoComp8Component', () => {
  let component: DemoComp8Component;
  let fixture: ComponentFixture<DemoComp8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoComp8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoComp8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
