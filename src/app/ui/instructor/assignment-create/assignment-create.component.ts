import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-assignment-create',
  templateUrl: './assignment-create.component.html',
  styleUrls: ['./assignment-create.component.scss']
})

export class AssignmentCreateComponent implements OnInit {

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
  files: File[] = [];
  isUndefined = false;
  assignmentDocID: String; 
  assignmentCreateDate: Date;
  assignmentDueDate: Date;
  schools: String[] = [];

  constructor(
    private fb: FormBuilder,
    private afStorage: AngularFireStorage
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
      title:["",Validators.required],
      description: [""]
    })
    // console.log(this.loginForm);
  }

  get title(): FormControl{
    return this.newAssignmentForm.get('title') as FormControl;
  }

  get description(): FormControl{
    return this.newAssignmentForm.get('description') as FormControl;
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
    // Check if any of the parameters are undefined. If undefined, show error and no action is taken
    if (this.schoolSelected === undefined|| this.instrumentOptions === undefined || this.levelSelected === undefined){
      this.isUndefined = true;
    } else {
      this.isUndefined = false;
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
    
  }

  removeButton(i:number){
    delete this.buttonTexts[i];
    this.buttonRepeat = false;
  }

  // Dropzone upload functions

  onSelect(event:any) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  upload(docID: String){
    for(var ele of this.files){
      console.log(ele);
      var location:string = "assignment/test";
      this.afStorage.upload( location, ele);
      // /* Notes: file directory, create if does not exist:
      // under assignments/assignmentDocid*/
      // var location:string = "assignments/" + this.assignment.assignmentid + "/" + this.assignment.student + "/"
      // this.afStorage.upload( location + file_name, ele)
      // .then(()=>this.updateAssignment())
      // .catch(()=>this.toastr.error("Unable to Upload Assignment!"))
    }
  }

  createAssignment(){

    // Retrieving Necessary information
    // Creating assignment Create Time 
    this.assignmentCreateDate = new Date();
    console.log("Assignment Time: ", this.assignmentCreateDate);

    // Retrieve Assignment Due date 
    // new Date ( year, month, date[, hour, minute, second, millisecond ]):
    this.assignmentDueDate = new Date(this.event.getUTCFullYear(), this.event?.getMonth(),this.event.getDate(),this.timeSelected.substring(0,2), this.timeSelected.substring(2,4));
    console.log("Assignment Due Time:", this.assignmentDueDate);

    // Retrieve instructor Account DocID
    console.log("DocID:", this.sessionAccount['docId']);

    // Retrieve description
    console.log("description:", this.newAssignmentForm.value.description);

    // Retrieve assignment name
    console.log("title:", this.newAssignmentForm.value.title);

    // Retrieve schools 
    
    for (let buttonText of this.buttonTexts){
      // Retrieve schools and put in schools array 
      if (!this.schools.includes(buttonText.split("_")[0])){
        this.schools.push(buttonText.split("_")[0]);
      }
    }

    console.log("Schools:", this.schools);



    // Upload file based on assignment docID

    // this.upload();
    

  }
}

