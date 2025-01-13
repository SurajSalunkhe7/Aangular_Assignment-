import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComp3Component } from './first-comp3.component';

describe('FirstComp3Component', () => {
  let component: FirstComp3Component;
  let fixture: ComponentFixture<FirstComp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstComp3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstComp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
