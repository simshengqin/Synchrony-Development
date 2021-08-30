import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Classes, School } from 'src/app/core/models/classes';

@Component({
  selector: 'app-assignment-create',
  templateUrl: './assignment-create.component.html',
  styleUrls: ['./assignment-create.component.scss']
})

export class AssignmentCreateComponent implements OnInit {


  // Substantiate array to take in class permissions
  permissions: School[] = [];

  // Substantiate array to take in available schools:
  schoolOptions: String[] = [];


  // Hardcoded data: Pending CRUD Operation update
  // User has access to school SJIJ, teaches in Bass P3, P5, and Flute P1
  SJIJ_Class1 = new Classes("Bass",["P3","P5"]);
  SJIJ_Class2 = new Classes("Flute",["P1"]);

  // SJII = new School("SJIJ",[this.SJIJ_Class1, this.SJIJ_Class2]);

  // User has access to school ACS, teaches in Drums P6, P2, and Piano P5, P4
  ACS_Class1 = new Classes("Drums",["P6","P2"]);
  ACS_Class2 = new Classes("Piano",["P5","P4"]);
  // ACS = new School("ACS", [this.ACS_Class1, this.ACS_Class2]);

  event!: Date | null;
  newAssignmentForm!:FormGroup;
  timeSelected!: any ;
  schoolSelected!: any; // This is an index
  instrumentOptions: String[] = [];


  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.initForm();

    // Hardcoding data, pending CRUD Operation update
    this.permissions.push(new School("SJIJ",[this.SJIJ_Class1, this.SJIJ_Class2]));
    this.permissions.push(new School("ACS", [this.ACS_Class1, this.ACS_Class2]))
    console.log(this.permissions);

    // Populate school dropdown list
    for (var sch of this.permissions ){
      this.schoolOptions.push(sch.getSchoolName());
    }

    console.log(this.schoolOptions);
  }

  initForm(): void{
    this.newAssignmentForm = this.fb.group({
      title:["",Validators.required]
    })
    // console.log(this.loginForm);
  }

  onSubmit(){
    console.log(this.event?.getDay);
  }

  captureEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.event = event.value;
  }

  filterInstruments(){}
}
