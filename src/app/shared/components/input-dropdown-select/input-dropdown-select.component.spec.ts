import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDropdownSelectComponent } from './input-dropdown-select.component';

describe('InputDropdownSelectComponent', () => {
  let component: InputDropdownSelectComponent;
  let fixture: ComponentFixture<InputDropdownSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDropdownSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDropdownSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
