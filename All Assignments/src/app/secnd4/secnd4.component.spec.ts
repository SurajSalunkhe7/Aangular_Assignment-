import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secnd4Component } from './secnd4.component';

describe('Secnd4Component', () => {
  let component: Secnd4Component;
  let fixture: ComponentFixture<Secnd4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Secnd4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Secnd4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
