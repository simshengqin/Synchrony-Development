import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';
import { ToastrService } from 'ngx-toastr';
import { Account } from '../../../core/models/account';
import { Assignment } from '../../../core/models/assignment'
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { environment } from "../../../../environments/environment.prod";
import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;
import { SharedService } from 'src/app/core/services/sharedservice.service';

@Component({
  selector: 'app-assignment-edit-individual',
  templateUrl: './assignment-edit-individual.component.html',
  styleUrls: ['./assignment-edit-individual.component.scss']
})
export class AssignmentEditIndividualComponent implements OnInit {

  actionType:string = "instructorEditIndividual";
  // Instrustor
  account!:Account;
  accountDocId!:string;
  instructorSchools:string[]=[];
  instructorSchoolInstrumentLevels:string[]=[]
  // Assignment
  assignment!:Assignment;
  assignmentDocId!:string;
  assignmentDescription!:string;
  assignmentDueDateTime!:any;
  assignmentDueDate!:any;
  assignmentDueTime!:string;
  assignmentName!:string;
  assignmentSchool:string[]=[];
  assignmentSchoolInstrumentLevel:string[]=[];
  assignmentFileNames:string[]=[];

  nameSchool:string = "School"
  nameInstrument:string = "Instrument"
  nameLevels:string = "Levels"

  schools:string[] = []
  instruments:string[] = []
  levels:string[] = []
  queriedInstruments:string[] = []
  queriedLevels:string[] = []

  addSchoolInstrumentsLevels = true;
  displaySchool = false;
  displayInstruments = false;
  displayLevels = false;

  selectedSchool!:string
  selectedInstrument!:string
  selectedLevel!:string

  toAddSchoolInstrumentLevel!:string
  toAddSchoolInstrumentLevelArray:string[] = []

  acceptMultipleFiles:boolean = true
  acceptedFileTypes:string = ".pdf,.mp3,.mp4"
  label:string = "Please drag and drop your attachment files for this assignment here. (Optional, Accepted format: .pdf, .mp4)"
  newFiles: File[] = []; // Contains the new files as object to upload, retrive from dropzone.
  newFilesNames: string[] = []; // Contains the new files names to upload to chck for duplicates.
  filesToBeDeleted: string[] = []; // contains the list of files to be deleted

  // Assignment's files and storage
  fileLocationPath!:string; // contains the path for assignments folder
  files:string[] = []; // contains all the files
  storage_bucket = "gs://" + environment.firebase.storageBucket;

  // validation, will be true when on load.
  isFileAcceptable:boolean = true;
  isNameAcceptable:boolean = true;
  isDescriptionAcceptable:boolean = true;
  isDueDateTimeAcceptable:boolean = true;
  isSchoolInstrumentLevelAcceptable:boolean = true;

  security_role_access: string = "instructor";

  constructor(
    private router: Router,
    private crudService:CrudService,
    private storage: AngularFireStorage,
    private toastr: ToastrService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.get_account_information();
    this.get_assignment_information();
    this.toAddSchoolInstrumentLevelArray = this.assignmentSchoolInstrumentLevel;
  }

  // Get the account information
  get_account_information(): void {
    if(JSON.parse(this.sharedService.getAccount()) != null){
      this.account = JSON.parse(this.sharedService.getAccount());
      if(this.security_role_access != this.account.role){
        this.router.navigate(['/login']);
        this.toastr.error('Access denied invalid user access detect!', '', {positionClass: 'toast-top-center'});
      }
      this.accountDocId = this.account.docId;
      this.instructorSchools = this.account.school;
      this.instructorSchoolInstrumentLevels = this.account.school_instrument_level;
      this.addSchoolInstrumentsLevels = true
    }
  }

  // Get the assignment information
  async get_assignment_information() {
    const assignmentid = this.sharedService.getComponentParameter();
    this.assignmentDocId = assignmentid;
    const data = await this.crudService.readByDocId('assignments', assignmentid).pipe(first()).toPromise();
    this.assignment = data
    this.assignmentDescription = this.assignment.description;
    this.convert_date_time(this.assignment.due_datetime)
    this.assignmentName = this.assignment.name;
    this.assignmentSchool = this.assignment.school;
    this.assignmentSchoolInstrumentLevel = this.assignment.school_instrument_level;
    this.get_assignment_files(assignmentid)
  }

  // === === //
  // === INSTRUCTOR SCHOOL INSTRUMENT AND LEVEL === //
  // === === //

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

  get_query_data_school($event:any):void{
    // change in school will refresh the instruments and levels
    if(this.selectedSchool!=$event.value){
      this.queriedInstruments = []
      this.queriedLevels = []
      this.selectedInstrument = "";
      this.selectedLevel = "";
    }
    this.queriedInstruments = []
    this.selectedSchool = $event.value
    if(this.selectedSchool.length == 0 || this.selectedSchool == "none"){
      this.displayInstruments = false
      this.displayLevels = false
    } else {
      this.displayInstruments = true
      this.displayLevels = false
      for(var ele of this.instruments){
        var tempSchool = ele.split("_")[0]
        if(tempSchool == this.selectedSchool){
          this.queriedInstruments.push(ele.split("_")[1])
        }
      }
    }
  }

  get_query_data_instrument($event:any):void{
    this.queriedLevels = []
    this.selectedInstrument = $event.value
    if(this.selectedInstrument.length == 0 || this.selectedInstrument == "none"){
      this.displayInstruments = true
      this.displayLevels = false
    } else {
      this.displayInstruments = true
      this.displayLevels = true
      for(var ele of this.levels){
        var tempSchoolInstrument = ele.split("_")[0] + "_" + ele.split("_")[1]
        var selectedSchoolInstrument = this.selectedSchool + "_" + this.selectedInstrument
        if(tempSchoolInstrument == selectedSchoolInstrument){
          this.queriedLevels.push(ele.split("_")[2])
        }
      }
    }
  }

  get_query_data_level($event:any):void{
    this.selectedLevel = $event.value
    this.toAddSchoolInstrumentLevel = this.selectedSchool + "_" + this.selectedInstrument + "_" + this.selectedLevel
  }

  add(){
    if(this.selectedSchool == "") {
      this.toastr.error('School is blank!', '', {positionClass: 'toast-top-center'});
      return
    } else if (this.selectedInstrument == '') {
      for (var element of this.instructorSchoolInstrumentLevels) {
        if (element.split("_")[0] == this.selectedSchool) {
          this.toAddSchoolInstrumentLevelArray.push(element);
        }
      }
    } else if (this.selectedLevel == '') {
      for (var element of this.instructorSchoolInstrumentLevels) {
        if (element.split("_")[0] == this.selectedSchool && element.split("_")[1] == this.selectedInstrument) {
          this.toAddSchoolInstrumentLevelArray.push(element);
        }
      }
    } else {
      this.toAddSchoolInstrumentLevelArray.push(this.selectedSchool + "_" + this.selectedInstrument + "_" + this.selectedLevel);
    }

    for (this.toAddSchoolInstrumentLevel of this.toAddSchoolInstrumentLevelArray) {
      if (!this.assignmentSchoolInstrumentLevel.includes(this.toAddSchoolInstrumentLevel.toString())) {
        this.assignmentSchoolInstrumentLevel.push(this.toAddSchoolInstrumentLevel.toString());
      } else {
        this.toastr.error("Group has been added already!", "", {positionClass: 'toast-top-center'});
      }
    }
  }

  // === === //
  // === TIME AND DATE === //
  // === === //

  convert_date_time(data:Timestamp){
    this.assignmentDueDateTime = data.toDate().toString().split(" ");
    this.assignmentDueDate = this.assignmentDueDateTime[3] + "-" + this.convert_date_abbreviation_to_number(this.assignmentDueDateTime[1]) + "-" + this.assignmentDueDateTime[2]
    this.assignmentDueTime = this.assignmentDueDateTime[4].split(":")[0] + ":" + this.assignmentDueDateTime[4].split(":")[1]
  }

  // Method: Convert date_abbreviation "Jan" or "January" to a number
  private convert_date_abbreviation_to_number(data:string){
    var num = "January___February__March_____April_____May_______June______July______August____September_October___November__December__".indexOf(data) / 10 + 1
    var strNum = num.toString()
    if(strNum.length==1){
      strNum = "0"+strNum;
    }
    return strNum
  }

  // === === //
  // === FILES == //
  // === === //

  // Get assignment files
  get_assignment_files(docid:string){
    this.fileLocationPath = "/assignment/" + docid + "/";
    for(var ele of this.assignment["file_names"]){
      this.assignmentFileNames.push(ele);
    }
  }

  // Method: Remove the file from the array, will not remove if request is canceled
  delete_file(data:string){
    var index = this.assignmentFileNames.indexOf(data)
    this.filesToBeDeleted.push(this.assignmentFileNames[index]);
    this.assignmentFileNames.splice(index,1)
  }

  // Method: Remove the file from firestorge Stroge.
  delete_files_from_database(){
    if(this.filesToBeDeleted.length!=0){
      for(var file of this.filesToBeDeleted){
        this.storage.storage.refFromURL(this.storage_bucket + this.fileLocationPath + file).delete();
      }
    }
  }

  addFiles($event:any){
    for(var file of $event){
        if(this.assignmentFileNames.indexOf(file["name"])==-1){
          this.newFiles.push(file);
        } else {
          this.showMessageError(file['name'] + " is already included in this assignment");
          this.isFileAcceptable = false;
        }
    }
    this.isFileAcceptable = true;
  }

  add_files_to_database(){
    if(this.newFiles.length!=0){
      for(var file of this.newFiles){
        var location: string = 'assignment/' + this.assignmentDocId + "/" + file['name'];
        if(this.assignmentFileNames.indexOf(file['name'])==-1){
          this.assignmentFileNames.push(file['name']);
          this.storage.upload(location, file);
          this.showMessageSuccess("file Uploaded");
        } else {
          this.showMessageError(file['name'] + " is already included");
        }
      }
    }
  }

  // remove school instrument level
  removeButton(i: number){
    this.assignmentSchoolInstrumentLevel.splice(i,1);
  }

  onSubmit(){

    this.validate_due_date_and_time();
    this.validate_name();
    this.validate_school_instrument_level();
    this.validate_description();

    if(this.isFileAcceptable && this.isNameAcceptable &&
      this.isSchoolInstrumentLevelAcceptable && this.isDueDateTimeAcceptable &&
      this.isDescriptionAcceptable){
        var updateAssignmentDueDateandTime:Timestamp = firebase.firestore.Timestamp.fromDate(new Date(this.assignmentDueDate + " " + this.assignmentDueTime))
        this.delete_files_from_database()
        this.add_files_to_database()
        let updateData = {
          description: this.assignmentDescription,
          due_datetime: updateAssignmentDueDateandTime,
          name: this.assignmentName,
          school_instrument_level: this.assignmentSchoolInstrumentLevel,
          file_names: this.assignmentFileNames
        }
        // Update the assignment.
        this.crudService.update("assignments", this.assignmentDocId, updateData)
        this.router.navigate(['/instructor/assignment/edit']);
        this.showMessageSuccess(this.assignmentName + " has been updated!")
      } else {
        this.showMessageError(this.assignmentName + " attributes do not meet the requirements")
      }
  }

  back(){
    this.router.navigate(['/instructor/assignment/edit']);
  }

  private validate_description(){
    if(this.assignmentDescription.length==0 || this.assignmentDescription==""){
      this.isDescriptionAcceptable = false
      this.showMessageError(this.assignmentName + " description is empty, plase give context to the assignment")
    } else {
      this.isDescriptionAcceptable = true
    }
  }

  private validate_school_instrument_level(){
    if(this.assignmentSchoolInstrumentLevel.length==0){
      this.isSchoolInstrumentLevelAcceptable = false
      this.showMessageError(this.assignmentName + " needs to have groups to be attached to this assignment.")
    } else {
      this.isSchoolInstrumentLevelAcceptable = true
    }
  }

  private validate_name(){
    if(this.assignmentName.length==0 || this.assignmentName==""){
      this.isNameAcceptable = false
      this.showMessageError(this.assignmentName + " name is empty, plase give it a title")
    } else {
      this.isNameAcceptable = true
    }
  }

  private validate_due_date_and_time(){
    var updateAssignmentDueDateandTime:Timestamp = firebase.firestore.Timestamp.fromDate(new Date(this.assignmentDueDate + " " + this.assignmentDueTime))
    var currentDateAndTime:Timestamp  = firebase.firestore.Timestamp.fromDate(new Date());
    if(currentDateAndTime > updateAssignmentDueDateandTime){
      this.isDueDateTimeAcceptable = false
      this.showMessageError(this.assignmentName + " due date & time has already pass")
    } else{
      this.isDueDateTimeAcceptable = true
    }
  }

  private showMessageSuccess(message:string) {
    if(message==null||message==""){
      message = "Success!";
    }
    this.toastr.success(message)
  }

  private showMessageError(message:string) {
    if(message==null||message==""){
      message = "Error!";
    }
    this.toastr.error(message)
  }

}
