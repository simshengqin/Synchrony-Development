import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorActivityLogIndividualComponent } from './instructor-activity-log-individual.component';

describe('InstructorActivityLogIndividualComponent', () => {
  let component: InstructorActivityLogIndividualComponent;
  let fixture: ComponentFixture<InstructorActivityLogIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorActivityLogIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorActivityLogIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
