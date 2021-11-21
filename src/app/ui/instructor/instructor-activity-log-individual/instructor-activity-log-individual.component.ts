import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';
import { Account } from '../../../core/models/account';
import { Wage } from '../../../core/models/wage';
import { first } from 'rxjs/operators';
import { AssignmentSubmission } from 'src/app/core/models/assignment-submission';
import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Assignment } from 'src/app/core/models/assignment';
import { SharedService } from 'src/app/core/services/sharedservice.service';


@Component({
  selector: 'app-instructor-activity-log-individual',
  templateUrl: './instructor-activity-log-individual.component.html',
  styleUrls: ['./instructor-activity-log-individual.component.scss']
})
export class InstructorActivityLogIndividualComponent implements OnInit {

  instructor_id!:string;
  instructor_data!:Account;
  instructor_name!:string;
  instructor_school!:string;

  school!:string;
  activity_logs:any[] = []

  dataSource = [];
  displayedColumns:string[] = ['name', 'first_name', 'last_name','feedback_datetime', 'minutes'];

  display_accumulated_time:number = 0; // display_accumulated_time will change constantly 
  accumulated_time:number = 0;

  // filter
  years:string[] = [];
  months:string[] = [];

  nameYear:string = "year";
  nameMonth:string = "month"

  selectedYears:string[] = [];
  selectedMonths:string[] = [];
  query_by_year_month:string[] = [];

  security_role_access: string = "instructor";

  is_loading_data: boolean = true;

  constructor(
    private router: Router,
    private crudService:CrudService,
    private toastrService: ToastrService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.is_loading_data = true;
    if(JSON.parse(this.sharedService.getAccount()) != null){
      var instrustor  = JSON.parse(this.sharedService.getAccount());
      if(this.security_role_access != instrustor.role){
        this.router.navigate(['/login']);
        this.toastrService.error('Access denied invalid user access detect!', '', {positionClass: 'toast-top-center'});
      }
    } else{
      this.router.navigate(['/login']);
    }
    this.get_activity_log();
  }

  async get_activity_log() {
    this.reset();
    const key = this.sharedService.getComponentParameter();
    this.instructor_id = key.split("_")[0]
    this.school = key.split("_")[1]

    this.instructor_data = await this.crudService.readByDocId('accounts',this.instructor_id).pipe(first()).toPromise();
    this.instructor_name = this.instructor_data.first_name + " " + this.instructor_data.last_name;
    this.instructor_school = this.school.toUpperCase();

    const data = await this.crudService.read('wages', 'instructor_account_doc_id', '==', this.instructor_id, 'school', '==', this.school).pipe(first()).toPromise();
    for (var wage of data){
      var instructorData = await this.crudService.readByDocId('accounts', this.instructor_id).pipe(first()).toPromise();
      var assignmentSubmissionData = await this.crudService.readByDocId('assignment_submissions', wage.assignment_submission_doc_id).pipe(first()).toPromise();
      var studentData = await this.crudService.readByDocId('accounts', assignmentSubmissionData.student_doc_id).pipe(first()).toPromise();
      var assignmentData = await this.crudService.readByDocId('assignments', assignmentSubmissionData.assignment_doc_id).pipe(first()).toPromise();
      this.activity_logs.push(this.create_custom_wage(wage,instructorData,assignmentSubmissionData,studentData,assignmentData));
    }
    this.display_accumulated_time = this.accumulated_time;
    this.dataSource = this.activity_logs;
    this.is_loading_data = false;
  }

  private create_custom_wage(wage:Wage, instructor:Account, assignmentSubmission:AssignmentSubmission, student:Account, assignmentData:Assignment){
    var date = this.convert_date(wage.feedback_datetime);
    var time = this.convert_time(wage.feedback_datetime);
    var date_filter = this.convert_datefilter(wage.feedback_datetime);
    var minutes = parseFloat((wage.seconds / 60).toFixed(0));
    this.accumulated_time += minutes;

    let data:Wage = {
      date_filter: date_filter,
      date: date,
      feedback_datetime: wage.feedback_datetime,
      seconds: parseFloat(wage.seconds.toFixed(3)),
      first_name: student.first_name,
      last_name: student.last_name,
      name: assignmentData.name,
      instructor_account_doc_id: wage.instructor_account_doc_id,
      assignment_submission_doc_id: wage.assignment_submission_doc_id,
      school: wage.school
    }
    return data
  }

  // Method: Convert date
  private convert_date(data:Timestamp){
    var feedback_DateTime = data.toDate().toString().split(" ");
    var date = feedback_DateTime[3] + "-" + this.convert_date_abbreviation_to_number(feedback_DateTime[1]) + "-" + feedback_DateTime[2]
    return date
  }

  // Method: Convert time
  private convert_time(data:Timestamp){
    var feedback_DateTime = data.toDate().toString().split(" ");
    var time = feedback_DateTime[4].split(":")[0] + ":" + feedback_DateTime[4].split(":")[1]
    return time
  }

  // Method: allow roles to be filtered via input.
  private convert_datefilter(data:Timestamp){
    var feedback_DateTime = data.toDate().toString().split(" ");
    var date = feedback_DateTime[3] + "-" + feedback_DateTime[1]
    this.set_year_filter(feedback_DateTime[3])
    this.set_month_filter(feedback_DateTime[1])
    return date
  }

  // Method: Set the year filter
  private set_year_filter(year:string){
    if(this.years.indexOf(year)==-1){
      this.years.push(year)
    }
  }

  // Method: Set the month filter
  private set_month_filter(month:string){
    if(this.months.indexOf(month)==-1){
      this.months.push(month)
    }
  }

  // Method: get the year filter result
  get_query_data_year($event:any):void{
    this.selectedYears = $event.value
    this.query_table_with_filter()
  }

  // Method: get the month filter result
  get_query_data_month($event:any):void{
    this.selectedMonths = $event.value
    this.query_table_with_filter()
  }

  // Method: Query the Database
  query_table_with_filter(){
    var result = []
    this.query_by_year_month = []
    if(this.selectedYears.length !=0 && this.selectedMonths.length !=0){
      this.display_accumulated_time = 0;
      for(var year of this.selectedYears){
        for(var month of this.selectedMonths){
          this.query_by_year_month.push(year + "-" + month)
        }
      }
      for (var ele of this.activity_logs){
        for(var query of this.query_by_year_month)
        if(ele["date_filter"] == query){
          this.display_accumulated_time += parseFloat((ele["seconds"] / 60).toFixed(0));
          result.push(ele)
        }
      }
      this.dataSource = result;
    } else{
      this.dataSource = this.activity_logs
      this.display_accumulated_time = this.accumulated_time
    }
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

  // Method: Reset global variables
  private reset(){
    this.display_accumulated_time = 0;
    this.accumulated_time = 0;
    this.activity_logs = [];
    this.dataSource = [];
  }

}
