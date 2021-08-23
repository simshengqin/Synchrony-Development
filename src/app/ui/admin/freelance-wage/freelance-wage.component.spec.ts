import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceWageComponent } from './freelance-wage.component';

describe('FreelanceWageComponent', () => {
  let component: FreelanceWageComponent;
  let fixture: ComponentFixture<FreelanceWageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelanceWageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelanceWageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
