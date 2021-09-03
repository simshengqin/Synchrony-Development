import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl } from '@angular/forms';
import { exit } from 'process';
import { Assignment } from 'src/app/core/models/assignment';
import { CrudService } from 'src/app/core/services/crud.service';
import { Router } from '@angular/router';

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
  classUndefined = false;
  assignmentDocID: String; 
  assignmentCreateDate: Date;
  assignmentDueDate: Date;
  schools: String[] = [];
  timeUndefined = false;
  isSubmitClicked = false;
  fileNames : String[] = [];
  dueDateError = false;
  createAssignmentButtonClickable = false;
  docIdAfterUpload = "";

  constructor(
    private fb: FormBuilder,
    private afStorage: AngularFireStorage,
    private crudService: CrudService,
    private router:Router
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
      this.classUndefined = true;
    } else {
      this.classUndefined = false;
      // Capture the school,instrument,levels details
      this.buttonText = this.schoolSelected + "_" + this.instrumentSelected + "_" + this.levelSelected;

      // Validate if the same text has been put before
      console.log(this.buttonText);

      if (this.buttonTexts.includes(this.buttonText)){
        this.buttonRepeat = true;
      } else {
        this.buttonTexts.push(this.buttonText)
        
        // Submit button is unclickable if there are no classes 
        if (this.buttonTexts.length > 0){
          this.createAssignmentButtonClickable = true;
        } else {
          this.createAssignmentButtonClickable = false;
        }
      }
    }
    
  }

  removeButton(i:number){
    this.buttonTexts.shift();
    this.buttonRepeat = false;

    console.log(this.buttonTexts.length);
    // Submit button is unclickable if there are no classes 
    if (this.buttonTexts.length == 0){
      this.createAssignmentButtonClickable = false;
    } else {
      this.createAssignmentButtonClickable = true;
    }

  }

  // Dropzone upload functions

  onSelect(event:any) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  upload(){
    this.docIdAfterUpload = sessionStorage.getItem("assignment_docId");
    var index = 0;
    for(var ele of this.files){
      console.log(ele);
      var location:string = "assignment/" + this.docIdAfterUpload+ "/" + this.fileNames[index];
      this.afStorage.upload(location, ele);
      index += 1;
      // /* Notes: file directory, create if does not exist:
      // under assignments/assignmentDocid*/
      // var location:string = "assignments/" + this.assignment.assignmentid + "/" + this.assignment.student + "/"
      // this.afStorage.upload( location + file_name, ele)
      // .then(()=>this.updateAssignment())
      // .catch(()=>this.toastr.error("Unable to Upload Assignment!"))
    }
    alert("Assignment has been created!");
    this.router.navigate(["/instructor/home"]);
  }


  createAssignment(){

    // To trigger title check validation 
    this.isSubmitClicked = true;

    // Retrieving Necessary information
    // Creating assignment Create Time 
    this.assignmentCreateDate = new Date();
    console.log("Assignment Time: ", this.assignmentCreateDate);

    // Retrieve Assignment Due date 
    // Validation check for due date: Cannot be undefined 
    if (this.event == null){
      this.timeUndefined = true;
      return;
    }
    this.assignmentDueDate = new Date(this.event.getUTCFullYear(), this.event?.getMonth(),this.event.getDate(),this.timeSelected.substring(0,2), this.timeSelected.substring(2,4));
    console.log("Assignment Due Time:", this.assignmentDueDate);


    // Due date validation
    // Assignment cannot be due before current date 

    if (this.assignmentCreateDate > this.assignmentDueDate){
      this.dueDateError = true;
      return;
    } else {
      this.dueDateError = false;
    }

    console.log(this.dueDateError)

    if (this.newAssignmentForm.status){

      // Retrieve instructor Account DocID
      console.log("DocID:", this.sessionAccount['docId']);

      // Retrieve description
      console.log("description:", this.newAssignmentForm.value.description);

      // Retrieve assignment name
      console.log("title:", this.newAssignmentForm.value.title);

      // Retrieve schools 
      console.log(this.buttonTexts);
      for (let buttonText of this.buttonTexts){
        // Retrieve schools and put in schools array 
        if (!this.schools.includes(buttonText.split("_")[0])){
          this.schools.push(buttonText.split("_")[0]);
        }
      }

      console.log("Schools:", this.schools);

      // Get schoolInstrumentLevel
      console.log("schoolInstrumentLevel", this.buttonTexts);

      // get file names
      var i = 0;
      for (let i = 0; i < this.files.length; i++){
        this.fileNames.push(this.files[i].name);
      }
      console.log("file names:",  this.fileNames);

      // Pack all information into assignment class:

      var finalAssignmentSubmission: Assignment = {
        instructor_account_doc_id: this.sessionAccount['docId'],
        created_datetime: this.assignmentCreateDate,
        description: this.newAssignmentForm.value.description,
        due_datetime: this.assignmentDueDate,
        name: this.newAssignmentForm.value.title,
        school: this.school,
        school_instrument_level: this.buttonTexts,
        file_names: this.fileNames
      };

      this.crudService.create('assignments', finalAssignmentSubmission)
      .then(function(docRef) {
        console.log("Document: ", docRef);
        console.log("Document", typeof(docRef));
        sessionStorage.setItem("assignment_docId",docRef);
      }).catch(()=>console.log("Unable to Upload Assignment!"));
      
      console.log("no man's land")
      
      this.upload();

    }
  }
}

