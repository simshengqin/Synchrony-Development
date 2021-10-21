import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorActivityLogComponent } from './instructor-activity-log.component';

describe('InstructorActivityLogComponent', () => {
  let component: InstructorActivityLogComponent;
  let fixture: ComponentFixture<InstructorActivityLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorActivityLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorActivityLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
