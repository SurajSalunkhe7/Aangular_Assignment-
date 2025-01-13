import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secnd3Component } from './secnd3.component';

describe('Secnd3Component', () => {
  let component: Secnd3Component;
  let fixture: ComponentFixture<Secnd3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Secnd3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Secnd3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
