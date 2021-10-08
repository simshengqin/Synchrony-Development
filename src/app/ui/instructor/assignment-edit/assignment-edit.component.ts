import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { Account } from '../../../core/models/account';
import { Assignment } from '../../../core/models/assignment'
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-assignment-edit',
  templateUrl: './assignment-edit.component.html',
  styleUrls: ['./assignment-edit.component.scss']
})
export class AssignmentEditComponent implements OnInit {

  account!:Account;
  accountDocId!:string;
  instructorSchools:string[]=[];
  sub_schools:string[]=[]
  sub_instrument:string[]=[];
  sub_levels:string[]=[];
  
  sub_display_instrument:boolean = false
  sub_display_levels:boolean = false

  // set filter name
  assignmentStatus:string[] = ["new assignment(s)","assignment(s) with submission status"];
  nameSchool:string = "School"
  nameInstrument:string = "Instrument"
  nameLevels:string = "Levels"
  nameStatus:string = "Assignment Status"
  
  // get filter data
  select_Combine_SchoolInstrumentLevels:string[] = [];
  selectSubSchools:string[] = [];
  selectSubInstruments:string[] = [];
  selectSubLevels:string[] = [];
  selectAssignmentStatus:string[] = [];

  // Mat Table
  dataSource!:any;
  displayedColumns:string[] = ['name', 'due_datetime', 'school_instrument_level', 'action'];
  actionType:string = "instructorAssignmentEdit";
  // Assignment
  assignments:any[]=[];

  constructor(
    private crudservice:CrudService) 
    { }

  ngOnInit(): void {
    this.get_account_information();
  }

  // Get the account doc Id
  get_account_information(): void {
    if(sessionStorage.getItem('account') != null){
      this.account = JSON.parse(sessionStorage.getItem('account'));
      this.accountDocId = this.account.docId;
      this.instructorSchools = this.account.school;
      //console.log(this.accountDocId);
      this.get_all_instructor_assignments()
      this.set_distint_school_instrument_level(this.account.school_instrument_level)
    }
  }

  // Get filter data by submission status
  get_assignment_statues($event:any):void{
    console.log($event.value)
    this.selectAssignmentStatus = $event.value
    if (this.select_Combine_SchoolInstrumentLevels.length == 0){
      this.get_all_instructor_assignments()
    } else {
      this.filtering_by_school_instrument_levels(this.select_Combine_SchoolInstrumentLevels)
    }
  } 

  async get_all_instructor_assignments(){
    this.dataSource = [];
    this.assignments = [];
    const data = await this.crudservice.read("assignments","instructor_account_doc_id","==",this.accountDocId).pipe(first()).toPromise()
    // console.log(data)
    for(var ele of data){
      var canDelete = true
      const checkAssignmentSubmission = await this.crudservice.read("assignment_submissions","assignment_doc_id","==",ele.docId).pipe(first()).toPromise()
      if (checkAssignmentSubmission.length > 0){
        canDelete = false
      }
      if(this.selectAssignmentStatus.length == 0){
        this.create_assignment(ele,canDelete)
      } else {
        if (this.selectAssignmentStatus.indexOf("new assignment(s)")!=-1) {
          if(canDelete){
            this.create_assignment(ele,canDelete)
          }
        }
        if (this.selectAssignmentStatus.indexOf("assignment(s) with submission status")!=-1){
          if(!canDelete){
            this.create_assignment(ele,canDelete)
          }
        }
      }
    }
    this.dataSource = this.assignments;
  }

  create_assignment(data:any,canDelete:boolean){
    // Change the date and time formate
    var edit_due_datetime = data.due_datetime.toDate()
    edit_due_datetime = edit_due_datetime.toString().split("GMT")[0].split(" ");
    var edit_due_date = edit_due_datetime[0] + ", " + edit_due_datetime[2] + " " + edit_due_datetime[1] + " " + edit_due_datetime[3] + ", "
    var edit_due_time = edit_due_datetime[4]
    var assignment: any = {
      docId: data.docId,
      instructor_account_doc_id: data.instructor_account_doc_id,
      created_datetime: data.created_datetime,
      description: data.description,
      due_datetime: edit_due_date + edit_due_time,
      name: data.name,
      school: data.school,
      school_instrument_level: data.school_instrument_level,
      file_names: data.file_names,
      canDelete: canDelete
    }
    this.assignments.push(assignment)
  }

  // split the school_instrument_level into arrays of there own.
  set_distint_school_instrument_level(data:string[]){
    for(var dataSchoolInstrumentLevel of data){
      var sub_query = dataSchoolInstrumentLevel.split("_")
      var school = sub_query[0];
      var instrument = sub_query[1];
      var level = sub_query[2];
      if(this.sub_schools.indexOf(school)==-1){
        this.sub_schools.push(school)
      }
      if(this.sub_instrument.indexOf(instrument)==-1){
        this.sub_instrument.push(instrument)
      }
      if(this.sub_levels.indexOf(level)==-1){
        this.sub_levels.push(level)
      }
    }
  } 

    // == get filter == //
    get_query_data_sub_schools($event:any):void{
      this.selectSubSchools = $event.value
      if(this.selectSubSchools.length == 0){
        this.sub_display_instrument = false
        this.sub_display_levels = false
      } else {
        this.sub_display_instrument = true
        this.sub_display_levels = false
      }
      if(this.sub_display_instrument == false && this.sub_display_levels == false){
        this.get_all_instructor_assignments();
      }
    }
  
    get_query_data_sub_instruments($event:any):void{
      this.selectSubInstruments = $event.value
      if(this.selectSubInstruments.length == 0){
        this.sub_display_levels = false
      } else {
        this.sub_display_levels = true
      }
    }
  
  get_query_data_sub_levels($event:any):void{
    this.selectSubLevels = $event.value
    this.combine_querry_search_data()
    this.query_table_with_filter()
  }

  // Method: 
  combine_querry_search_data(){
    this.select_Combine_SchoolInstrumentLevels = [];
    if(this.sub_display_instrument != false && this.sub_display_levels != false){
      this.select_Combine_SchoolInstrumentLevels = [];
      for(var eleSchool of this.selectSubSchools){
        for(var eleInstrument of this.selectSubInstruments){
          for(var eleLevel of this.selectSubLevels){
            var query = eleSchool + "_" + eleInstrument + "_" + eleLevel
            if(this.select_Combine_SchoolInstrumentLevels.indexOf(query)==-1){
              this.select_Combine_SchoolInstrumentLevels.push(query)
            }
          }
        }
      }
    }
  }

  // Method: 
  query_table_with_filter(){
    //var result:Account[] = [];
    //result = this.assignments;
    if(this.select_Combine_SchoolInstrumentLevels.length!=0){
      this.filtering_by_school_instrument_levels(this.select_Combine_SchoolInstrumentLevels)
    } else {
      this.dataSource = this.assignments;
    }
  }

  // Method: 
  async filtering_by_school_instrument_levels(filter:string[]){
    this.assignments = [];
    const data = await this.crudservice.read("assignments","instructor_account_doc_id","==",this.accountDocId,"school_instrument_level","array-contains-any",filter).pipe(first()).toPromise()
    for(var ele of data){
      var canDelete = true
      const checkAssignmentSubmission = await this.crudservice.read("assignment_submissions","assignment_doc_id","==",ele.docId).pipe(first()).toPromise()
      if (checkAssignmentSubmission.length > 0){
        canDelete = false
      }
      if(this.selectAssignmentStatus.length == 0){
        this.create_assignment(ele,canDelete)
      } else {
        if (this.selectAssignmentStatus.indexOf("new assignment(s)")!=-1) {
          if(canDelete){
            this.create_assignment(ele,canDelete)
          }
        }
        if (this.selectAssignmentStatus.indexOf("assignment(s) with submission status")!=-1){
          if(!canDelete){
            this.create_assignment(ele,canDelete)
          }
        }
      }
    }
    this.dataSource = this.assignments;
  }

}
