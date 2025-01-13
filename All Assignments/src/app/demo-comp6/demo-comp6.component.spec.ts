import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComp6Component } from './demo-comp6.component';

describe('DemoComp6Component', () => {
  let component: DemoComp6Component;
  let fixture: ComponentFixture<DemoComp6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoComp6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoComp6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
