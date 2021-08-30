import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { InputDropdownSelectComponent } from 'src/app/shared/components/input-dropdown-select/input-dropdown-select.component';

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
  buttonTexts: String[]= [];
  buttonText: String = "";
  buttonRepeat = false;

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

  captureEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.event = event.value;
  }

  populateInstrumentOptions(){
    console.log("Instrument Function Triggered");
    // Clear all subsequent options
    this.instrumentOptions = [];
    this.classGroups = [];
    this.levelOptions = [];

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
    // Clear levelOptions
    this.levelOptions = [];
    for (var classGroup of this.classGroups){
      this.levelOptions.push(classGroup.split("_")[2])
    }
  }

  onSubmit(){
    // Capture the school,instrument,levels details
    this.buttonText = this.schoolSelected + "_" + this.instrumentSelected + "_" + this.levelSelected;

    // Validate if the same text has been put before
    console.log(this.buttonText);

    if (this.buttonTexts.includes(this.buttonText)){
      this.buttonRepeat = true;
    } else {
      this.buttonTexts.push(this.buttonText)
    }

  }

  removeButton(i:number){
    delete this.buttonTexts[i];
  }
}

