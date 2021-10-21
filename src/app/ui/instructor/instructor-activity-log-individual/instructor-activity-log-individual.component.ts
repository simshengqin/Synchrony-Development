import {Component, OnInit, AfterViewInit, ViewChild, Input, ElementRef} from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';
import { Account } from '../../../core/models/account';
import { Wage } from '../../../core/models/wage';
import { first } from 'rxjs/operators';
import { AssignmentSubmission } from 'src/app/core/models/assignment-submission';
import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { Assignment } from 'src/app/core/models/assignment';

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

  school:string[] = [];
  activity_logs:any[] = []

  dataSource = [];
  displayedColumns:string[] = ['name', 'first_name', 'last_name','feedback_datetime', 'minutes'];

  accumulated_time:number = 0;

  // filter
  years:string[] = [];
  months:string[] = [];

  nameYear:string = "year";
  nameMonth:string = "month"

  selectedYears:string[] = [];
  selectedMonths:string[] = [];
  query_by_year_month:string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crudservice:CrudService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.get_activity_log()
  }

  async get_activity_log() {
    this.reset()
    const key = this.route.snapshot.paramMap.get('key');
    this.instructor_id = key.split("_")[0]
    this.school.push(key.split("_")[1])

    this.instructor_data = await this.crudservice.readByDocId('accounts',this.instructor_id).pipe(first()).toPromise();
    this.instructor_name = this.instructor_data.first_name + " " + this.instructor_data.last_name
    this.instructor_school = this.school[0];

    const data = await this.crudservice.read('wages', 'instructor_account_doc_id', '==', this.instructor_id, 'school', 'array-contains-any', this.school).pipe(first()).toPromise();
    for (var wage of data){
      var instructorData = await this.crudservice.readByDocId('accounts', this.instructor_id).pipe(first()).toPromise();
      var assignmentSubmissionData = await this.crudservice.readByDocId('assignment_submissions', wage.assignment_submission_doc_id).pipe(first()).toPromise();
      var studentData = await this.crudservice.readByDocId('accounts', assignmentSubmissionData.student_doc_id).pipe(first()).toPromise();
      var assignmentData = await this.crudservice.readByDocId('assignments', assignmentSubmissionData.assignment_doc_id).pipe(first()).toPromise();
      //this.create_custom_wage(wage,instructorData,assignmentSubmissionData,studentData)
      this.activity_logs.push(this.create_custom_wage(wage,instructorData,assignmentSubmissionData,studentData,assignmentData))
    }
    this.dataSource = this.activity_logs;
  }

  private create_custom_wage(wage:Wage, instructor:Account, assignmentSubmission:AssignmentSubmission, student:Account, assignmentData:Assignment){
    var date = this.convert_date(wage.feedback_datetime)
    var time = this.convert_time(wage.feedback_datetime)
    var date_filter = this.convert_datefilter(wage.feedback_datetime)
    var minutes = (Math.round((wage.seconds / 60) * 1000) / 1000).toFixed(3);
    this.accumulated_time += parseFloat(minutes)

    let data:any = {
      date_filter: date_filter,
      //feedback_date: wage.feedback_datetime,
      feedback_datetime: wage.feedback_datetime,
      //assignment_submission_doc_id: wage.assignment_submission_doc_id,
      //minutes: minutes + " mins"
      //seconds: wage.seconds,
      seconds: (Math.round((wage.seconds) * 1000) / 1000).toFixed(3),
      first_name: student.first_name,
      last_name: student.last_name,
      name: assignmentData.name
    }

    return data
  }

  private convert_date(data:Timestamp){
    var feedback_DateTime = data.toDate().toString().split(" ");
    var date = feedback_DateTime[3] + "-" + this.convert_date_abbreviation_to_number(feedback_DateTime[1]) + "-" + feedback_DateTime[2]
    return date
  }

  private convert_time(data:Timestamp){
    var feedback_DateTime = data.toDate().toString().split(" ");
    var time = feedback_DateTime[4].split(":")[0] + ":" + feedback_DateTime[4].split(":")[1]
    return time
  }

  // allow roles to be filtered via input.
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

  get_query_data_year($event:any):void{
    this.selectedYears = $event.value
    this.query_table_with_filter()
  }

  get_query_data_month($event:any):void{
    this.selectedMonths = $event.value
    this.query_table_with_filter()
  }

  query_table_with_filter(){
    var result:any = []
    this.query_by_year_month = []
    if(this.selectedYears.length !=0 && this.selectedMonths.length !=0){
      this.accumulated_time = 0;
      for(var year of this.selectedYears){
        for(var month of this.selectedMonths){
          console.log(year + "-" + month)
          this.query_by_year_month.push(year + "-" + month)
        }
      }
      for (var ele of this.activity_logs){
        for(var query of this.query_by_year_month)
        if(ele["date_filter"] == query){
          this.accumulated_time += parseFloat((Math.round((ele["seconds"]  / 60) * 1000) / 1000).toFixed(3))
          result.push(ele)
        }
      }
      this.dataSource = result;
    } else{
      this.get_activity_log()
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

  private reset(){
    this.accumulated_time = 0;
    this.activity_logs = [];
    this.dataSource = [];
  }

}
