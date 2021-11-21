import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';
import { Account } from '../../../core/models/account';
import { Wage } from '../../../core/models/wage';
import { first } from 'rxjs/operators';
import { AssignmentSubmission } from 'src/app/core/models/assignment-submission';
import { SharedService } from 'src/app/core/services/sharedservice.service';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-activity-log',
  templateUrl: './admin-activity-log.component.html',
  styleUrls: ['./admin-activity-log.component.scss']
})
export class AdminActivityLogComponent implements OnInit {

  wages:any = [];
  wagesByInstructorSchool:any = [];

  dataSource = [];
  displayedColumns:string[] = ['first_name', 'last_name', 'school_abbreviation', 'action'];
  actionType:string = "adminActivityLog";
  @ViewChild('app-table') appTable: ElementRef | undefined;
  
  // set filter data
  schools:string[] = [];
  instrustors:string[] = [];
  // set filter name
  nameSchool:string = "School";
  nameInstrustor:string = "Instrustor";
  // selected schools
  selectedSchools:string[] = [];
  selectedInstrustors:string[] = [];

  security_role_access: string = "admin";

  is_loading_data:boolean = true;

  constructor(
    private crudService: CrudService,
    private sharedService:SharedService,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    if(JSON.parse(this.sharedService.getAccount()) != null){
      var accountDetail = JSON.parse(this.sharedService.getAccount());
      if(this.security_role_access != accountDetail.role){
        this.router.navigate(['/login']);
        this.toastrService.error('Access denied invalid user access detect!', '', {positionClass: 'toast-top-center'});
      }
    } else{
      this.router.navigate(['/login']);
    }
    this.is_loading_data = true
    this.retrieve_all_wages();
  }

  async retrieve_all_wages(){
    this.reset();
    var data = await this.crudService.read('wages').pipe(first()).toPromise();
    for (var wage of data) {
      var instructorData = await this.crudService.readByDocId('accounts', wage.instructor_account_doc_id).pipe(first()).toPromise();
      var assignmentSubmissionData = await this.crudService.readByDocId('assignment_submissions', wage.assignment_submission_doc_id).pipe(first()).toPromise();
      this.wages.push(this.create_custom_wage(wage,instructorData,assignmentSubmissionData))
    }
    for (var ele of this.wages){
      var isExist:boolean = false
      for(var i = 0; i < this.wagesByInstructorSchool.length; i++){
          if(ele["key"] == this.wagesByInstructorSchool[i]["key"]){
            isExist = true;
            break;
          }
        if(isExist){ 
          break; 
        }
      } if (!isExist){
        this.wagesByInstructorSchool.push(ele);
      }
    }
    this.dataSource = this.wagesByInstructorSchool;
    this.is_loading_data = false;
  }

  private create_custom_wage(wage:Wage, account:Account, assignmentSybmission:AssignmentSubmission){
    if(this.schools.indexOf(wage.school)==-1){
      this.schools.push(wage.school)
    }
    let data:Wage = {
      key: account.docId + "_" + wage.school,
      instructor_account_doc_id: account.docId,
      first_name: account.first_name,
      last_name: account.last_name,
      school: wage.school,
      seconds: wage.seconds,
      feedback_datetime: wage.feedback_datetime,
      assignment_submission_doc_id: wage.assignment_submission_doc_id,
      school_abbreviation: wage.school
    }
    return data
  }

  get_query_schools($event:any){
    this.selectedSchools = $event.value;
    this.query_table_with_filter();
  }

  async query_table_with_filter(){
    this.reset();
    if(this.selectedSchools.length != 0){
      var result:any[] = []
      for(var ele of this.wagesByInstructorSchool){
        for(var school of this.selectedSchools){
          if(ele["school_abbreviation"] == school){
            result.push(ele)
          }
        }
      }
      this.dataSource = result
    } else {
      this.dataSource = this.wagesByInstructorSchool
    }
  }

  private reset(){
    this.dataSource = [];
  }

}
