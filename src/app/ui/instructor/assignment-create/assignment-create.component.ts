import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl } from '@angular/forms';
import { Assignment } from 'src/app/core/models/assignment';
import { CrudService } from 'src/app/core/services/crud.service';
import { Router } from '@angular/router';
import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;
import {ToastrService} from "ngx-toastr";
import { SharedService } from 'src/app/core/services/sharedservice.service';
import { Account } from '../../../core/models/account';

@Component({
  selector: 'app-assignment-create',
  templateUrl: './assignment-create.component.html',
  styleUrls: ['./assignment-create.component.scss']
})

export class AssignmentCreateComponent implements OnInit {

  event!: Date | null;
  newAssignmentForm!: FormGroup;
  timeSelected!: any ;
  schoolSelected!: string;
  schoolsUpload: string[] = [];
  instrumentSelected!: any;
  instrumentOptions: string[] = [];
  schoolOptions!: string[];
  sessionAccount!: any;
  schoolInstrumentLevel!: string[];
  school: any;
  classGroups: string[] = [];
  levelSelected: any;
  levelOptions: string[] = [];
  buttonTexts: string[] = [];
  buttonText = '';
  buttonRepeat = false;
  files: File[] = [];
  classUndefined = false;
  assignmentDocID: string;
  assignmentCreateDate: Timestamp;
  assignmentDueDate: Timestamp;
  schools: string[] = [];
  instruments:string[] = []
  levels:string[] = []
  timeUndefined = false;
  isSubmitClicked = false;
  fileNames: string[] = [];
  dueDateError = false;
  createAssignmentButtonClickable = false;
  docIdAfterUpload = '';

  assignmentSchoolInstrumentLevel:string[]=[];
  addSchoolInstrumentsLevels = true;
  displaySchool = false;
  displayInstruments = false;
  displayLevels = false;
  account!:Account;
  toAddSchoolInstrumentLevelArray:string[] = []
  toAddSchoolInstrumentLevel:String;
  queriedInstruments:string[] = []
  queriedLevels:string[] = []
  accountDocId!:string;
  instructorSchools:string[]=[];

  nameSchool:string = "School"
  nameInstrument:string = "Instrument"
  nameLevels:string = "Levels"

  security_role_access_instructor:string = "instructor";

  constructor(
    private fb: FormBuilder,
    private afStorage: AngularFireStorage,
    private crudService: CrudService,
    private router: Router,
    private toastrService: ToastrService,
    private sharedService:SharedService
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    this.get_account_information();
    // Populate school dropdown list
    this.sessionAccount = JSON.parse(this.sharedService.getAccount()!);
    this.schoolOptions = this.sessionAccount.school;
    this.schoolInstrumentLevel = this.sessionAccount.school_instrument_level;
  }

  initForm(): void{
    this.newAssignmentForm = this.fb.group({
      title: ['', Validators.required],
      description: ['']
    });
  }

  get_account_information(): void {
    if(JSON.parse(this.sharedService.getAccount()) != null){
      this.account = JSON.parse(this.sharedService.getAccount());
      if(this.security_role_access_instructor != this.account.role){
        this.router.navigate(['/login']);
        this.toastrService.error('Access denied invalid user access detect!', '', {positionClass: 'toast-top-center'});
      }
      this.accountDocId = this.account.docId;
      this.instructorSchools = this.account.school;
      this.addSchoolInstrumentsLevels = true
    } else{
      this.router.navigate(['/login']);
    }
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

  add_display_school_instrument_level(){
    this.addSchoolInstrumentsLevels = false
    this.get_instructor_assign_school_insturment_level(this.account.school_instrument_level)
    this.displaySchool = true
  }

  get_instructor_assign_school_insturment_level(data:string[]){

    this.schools = [];
    this.instruments = [];
    this.levels = [];

    this.displayInstruments = false;
    this.displayLevels = false;

    for (var ele of data){
      var tempsSchool = ele.split("_")[0]
      var tempInsturment = ele.split("_")[1]
      // ensure distinct values
      if(this.schools.indexOf(tempsSchool)==-1){
        this.schools.push(tempsSchool)
      }
      if(this.instruments.indexOf(tempsSchool+"_"+tempInsturment)==-1){
        this.instruments.push(tempsSchool+"_"+tempInsturment)
      }
      if(this.levels.indexOf(ele)==-1){
        this.levels.push(ele)
      }
    }
  }

  add(){
    this.toAddSchoolInstrumentLevelArray = [];
    // School cannot be blank validation
    if(this.schoolSelected == ""){
      this.toastrService.error( 'School is blank!', '', {positionClass: 'toast-top-center'});
      return
    } else if (this.instrumentSelected == "") {
      // If instrument is blank, add all in the school
        for (var element of this.schoolInstrumentLevel){
          if (element.split("_")[0] == this.schoolSelected){
            this.toAddSchoolInstrumentLevelArray.push(element)
          }
        }
      } else if (this.levelSelected == ""){
        // If level is blank, add all in the instrument
        for (var element of this.schoolInstrumentLevel){
          if (element.split("_")[0] == this.schoolSelected && element.split("_")[1] == this.instrumentSelected){
            this.toAddSchoolInstrumentLevelArray.push(element)
        }
      } 
    } else {
      this.toAddSchoolInstrumentLevelArray.push(this.schoolSelected + "_" +  this.instrumentSelected + "_" + this.levelSelected)
    }
    
    for (this.toAddSchoolInstrumentLevel of this.toAddSchoolInstrumentLevelArray){
      if(!this.assignmentSchoolInstrumentLevel.includes(this.toAddSchoolInstrumentLevel.toString())){
        this.assignmentSchoolInstrumentLevel.push(this.toAddSchoolInstrumentLevel.toString());
      } else {
        this.toastrService.error( 'Group has been added already!', '', {positionClass: 'toast-top-center'});
      }
    }
    
    if (this.assignmentSchoolInstrumentLevel.length > 0){
      this.createAssignmentButtonClickable = true;
    } else {
      this.createAssignmentButtonClickable = false;
    }

    this.addSchoolInstrumentsLevels = true

    this.displaySchool = false
    this.displayInstruments = false;
    this.displayLevels = false;
    
  }

  get_query_data_school($event:any):void{
    // change in school will refresh the instruments and levels
    if(this.schoolSelected!=$event.value){
      this.queriedInstruments = []
      this.queriedLevels = []
      this.instrumentSelected = "";
      this.levelSelected = "";
    }
    this.queriedInstruments = []
    this.schoolSelected = $event.value
    if(this.schoolSelected.length == 0 || this.schoolSelected == "none"){
      this.displayInstruments = false
      this.displayLevels = false
    } else {
      this.displayInstruments = true
      this.displayLevels = false
      for(var ele of this.instruments){
        var tempSchool = ele.split("_")[0]
        if(tempSchool == this.schoolSelected){
          this.queriedInstruments.push(ele.split("_")[1])
        }
      }
    }
  }

  get_query_data_instrument($event:any):void{
    this.queriedLevels = []
    this.instrumentSelected = $event.value
    if(this.instrumentSelected.length == 0 || this.instrumentSelected == "none"){
      this.displayInstruments = true
      this.displayLevels = false
    } else {
      this.displayInstruments = true
      this.displayLevels = true
      for(var ele of this.levels){
        var tempSchoolInstrument = ele.split("_")[0] + "_" + ele.split("_")[1]
        var selectedSchoolInstrument = this.schoolSelected + "_" + this.instrumentSelected
        if(tempSchoolInstrument == selectedSchoolInstrument){
          this.queriedLevels.push(ele.split("_")[2])
        }
      }
    }
  }

  get_query_data_level($event:any):void{
    this.levelSelected = $event.value
  }

  populateInstrumentOptions(){
    // Clear all subsequent options
    this.instrumentOptions = [];
    this.classGroups = [];
    this.levelOptions = [];

    for (const classGroup of this.schoolInstrumentLevel){
      // Split classgroup to find school
      this.school = classGroup.split('_')[0];
      if (this.school == this.schoolSelected){
        this.classGroups.push(classGroup);
        if (!this.instrumentOptions.includes(classGroup.split('_')[1])){
          this.instrumentOptions.push(classGroup.split('_')[1]);
        }
      }
    }
  }

  populateLevelOptions(){
    // Clear levelOptions
    this.levelOptions = [];
    for (const classGroup of this.classGroups){
      this.levelOptions.push(classGroup.split('_')[2]);
    }
  }

  onSubmit(){
    // Used to maintain dependencies, but no longer used 
  }

  removeGroup(i: number){
    this.assignmentSchoolInstrumentLevel.splice(i,1)
  }

  // Dropzone upload functions
  onSelect(event: any) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  upload(){
    this.docIdAfterUpload = sessionStorage.getItem('assignment_docId');
    let index = 0;
    for (const ele of this.files){
      const location: string = 'assignment/' + this.docIdAfterUpload + '/' + this.fileNames[index];
      this.afStorage.upload(location, ele);
      index += 1;
    }
    this.toastrService.success('Assignment has been created!', '', {positionClass: 'toast-top-center'});

    this.router.navigate(['/instructor/home']);
  }


  async createAssignment() {
    // To trigger check validation
    this.isSubmitClicked = true;

    // Validate form 
    if (!this.newAssignmentForm.valid){
      return;
    }

    // Retrieving Necessary information
    // Creating assignment Create Time
    this.assignmentCreateDate = Timestamp.fromDate(new Date());

    // Retrieve Assignment Due date
    // Validation check for due date: Cannot be undefined
    if (this.event == null) {
      this.timeUndefined = true;
      return;
    }
    this.assignmentDueDate = Timestamp.fromDate(new Date(this.event.getUTCFullYear(), this.event?.getMonth(),
      this.event.getDate(), this.timeSelected.substring(0, 2), this.timeSelected.substring(2, 4)));

    // Due date validation
    // Assignment cannot be due before current date

    if (this.assignmentCreateDate > this.assignmentDueDate) {
      this.dueDateError = true;
      return;
    } else {
      this.dueDateError = false;
    }

    if (this.newAssignmentForm.status) {
      for (const classes of this.assignmentSchoolInstrumentLevel) {
        // Retrieve schools and put in schools array
        if (!this.schoolsUpload.includes(classes.split('_')[0])) {
          this.schoolsUpload.push(classes.split('_')[0]);
        }
      }

      const i = 0;
      for (let i = 0; i < this.files.length; i++) {
        this.fileNames.push(this.files[i].name);
      }

      // Pack all information into assignment class:
      const finalAssignmentSubmission: Assignment = {
        instructor_account_doc_id: this.sessionAccount.docId,
        created_datetime: this.assignmentCreateDate,
        description: this.newAssignmentForm.value.description,
        due_datetime: this.assignmentDueDate,
        name: this.newAssignmentForm.value.title,
        school: this.schoolsUpload,
        school_instrument_level: this.assignmentSchoolInstrumentLevel,
        file_names: this.fileNames
      };

      await this.crudService.create('assignments', finalAssignmentSubmission)
        .then(function (docRef) {
          sessionStorage.setItem('assignment_docId', docRef);
        }).catch(() => this.toastrService.error('Unable to Upload Assignment!', '', {positionClass: 'toast-top-center'}));
      this.upload();
    }
  }
}