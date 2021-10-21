import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActivityLogIndividualComponent } from './admin-activity-log-individual.component';

describe('AdminActivityLogIndividualComponent', () => {
  let component: AdminActivityLogIndividualComponent;
  let fixture: ComponentFixture<AdminActivityLogIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminActivityLogIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminActivityLogIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
