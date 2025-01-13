import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComp2Component } from './second-comp2.component';

describe('SecondComp2Component', () => {
  let component: SecondComp2Component;
  let fixture: ComponentFixture<SecondComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondComp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
