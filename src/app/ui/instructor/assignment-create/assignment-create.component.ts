import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-assignment-create',
  templateUrl: './assignment-create.component.html',
  styleUrls: ['./assignment-create.component.scss']
})

export class AssignmentCreateComponent implements OnInit {

  // Substantiate array to take in available schools:
  event!: Date | null;
  newAssignmentForm!:FormGroup;
  timeSelected!: any ;
  schoolSelected!: String;
  instrumentSelected!: any;
  instrumentOptions :String[] = [];
  schoolOptions!: String[];
  sessionAccount!: any;
  schoolInstrumentLevel!: String[];
  school:any;
  classGroups : String[] = [];
  levelSelected : any;
  levelOptions : String[] = [];

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.initForm();

    // Populate school dropdown list
    this.sessionAccount = JSON.parse(sessionStorage.getItem("account")!);
    this.schoolOptions = this.sessionAccount['school'];
    console.log(this.schoolOptions)
    this.schoolInstrumentLevel = this.sessionAccount['school_instrument_level'];
    console.log(this.schoolInstrumentLevel)
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

  populateInstrumentOptions(){
    console.log("Instrument Function Triggered");
    for (var classGroup of this.schoolInstrumentLevel){
      // Split classgroup to find school
      this.school = classGroup.split("_")[0];
      if(this.school == this.schoolSelected){
        this.classGroups.push(classGroup);
        this.instrumentOptions.push(classGroup.split("_")[1]);
      }
    }
  }

  populateLevelOptions(){
    for (var classGroup of this.classGroups){
      this.levelOptions.push(classGroup.split("_")[2])
    }
  }

}
