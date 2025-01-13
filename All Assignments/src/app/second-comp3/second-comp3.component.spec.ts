import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComp3Component } from './second-comp3.component';

describe('SecondComp3Component', () => {
  let component: SecondComp3Component;
  let fixture: ComponentFixture<SecondComp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondComp3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondComp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
