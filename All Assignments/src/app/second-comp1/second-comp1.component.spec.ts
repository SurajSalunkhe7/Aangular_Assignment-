import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComp1Component } from './second-comp1.component';

describe('SecondComp1Component', () => {
  let component: SecondComp1Component;
  let fixture: ComponentFixture<SecondComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondComp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
