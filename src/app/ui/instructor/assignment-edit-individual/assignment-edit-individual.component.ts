import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { Account } from '../../../core/models/account';
import { Assignment } from '../../../core/models/assignment'
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { environment } from "../../../../environments/environment.prod";
import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

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
  // Assignment 
  assignment!:Assignment;
  assignmentDocId!:string;
  assignmentDescription!:string;
  assignmentDueDateTime!:Timestamp;
  assignmentName!:string;
  assignmentSchool:string[]=[];
  assignmentSchoolInstrumentLevel:string[]=[];
  assignmentFileNames:string[]=[];

  // Assignment' files
  fileLocationPath!:string; // contains the path for assignments folder
  files:string[] = []; // contains all the files
  storage_bucket = "gs://" + environment.firebase.storageBucket;

  constructor(
    private route: ActivatedRoute,
    private crudservice:CrudService,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.get_account_information()
    this.get_assignment_information()
  }

  // Get the account information
  get_account_information(): void {
    if(sessionStorage.getItem('account') != null){
      this.account = JSON.parse(sessionStorage.getItem('account'));
      this.accountDocId = this.account.docId;
      this.instructorSchools = this.account.school;
      //this.get_all_instructor_assignments()
      //this.set_distint_school_instrument_level(this.account.school_instrument_level)
    }
  }

  // Get the assignment information 
  async get_assignment_information() {
    const assignmentid = this.route.snapshot.paramMap.get('docId');
    this.assignmentDocId = assignmentid;
    const data = await this.crudservice.readByDocId('assignments', assignmentid).pipe(first()).toPromise();
    this.assignment = data
    //this.assignmentDescription = this.assignment.description;
    //this.assignmentDueDateTime = this.assignment.due_datetime;
    //this.assignmentName = this.assignment.name;
    //this.assignmentSchool = this.assignment.school;
    //this.assignmentSchoolInstrumentLevel = this.assignment.school_instrument_level;
    //this.assignmentFileNames = this.assignment.file_names;
    
    this.get_assignment_files(assignmentid)
  }

  // Get assignment files
  get_assignment_files(docid:string){
    this.fileLocationPath = "/assignment/" + docid + "/";
    for(var ele of this.assignment["file_names"]){
      this.assignmentFileNames.push(ele);
    }
  }

  // delete files
  delete_file(data:string){
    // Remove the file from the array 
    var index = this.assignmentFileNames.indexOf(data)
    this.assignmentFileNames.splice(index,1)
    // Remove the file from S3 Stroge.
    this.storage.storage.refFromURL(this.storage_bucket + this.fileLocationPath + data).delete();
    // Set updated data into new object
    var updateData = this.update_data_assignment()
    // Update the assignment.
    this.crudservice.update("assignments",this.assignmentDocId,updateData)
  } 

  update_data_assignment(){
    let data = {
      //instructor_account_doc_id: this.assignment.instructor_account_doc_id,
      //created_datetime: this.assignment.created_datetime,
      //description: this.assignmentDescription,
      //due_datetime: this.assignmentDueDateTime,
      //name: this.assignmentName,
      //school: this.assignmentSchool,
      //school_instrument_level: this.assignmentSchoolInstrumentLevel ,
      file_names: this.assignmentFileNames
    }
    return data
  }



}
