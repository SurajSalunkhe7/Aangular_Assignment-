import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComp5Component } from './demo-comp5.component';

describe('DemoComp5Component', () => {
  let component: DemoComp5Component;
  let fixture: ComponentFixture<DemoComp5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoComp5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoComp5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
