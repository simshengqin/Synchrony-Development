import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {first} from "rxjs/operators";
import {AssignmentSubmission} from "../../../core/models/assignment-submission";
import {CrudService} from "../../../core/services/crud.service";
import {Account} from "../../../core/models/account";
import {TranslateService} from "@ngx-translate/core";
import {DatePipe} from "@angular/common";
import {Assignment} from "../../../core/models/assignment";
import { SharedService } from 'src/app/core/services/sharedservice.service';

@Component({
  selector: 'app-assignment-mark',
  templateUrl: './assignment-mark.component.html',
  styleUrls: ['./assignment-mark.component.scss']
})
export class AssignmentMarkComponent implements OnInit {
  loggedInAccount: Account;
  accountUsername!: '';
  dataSource!: Array<AssignmentSubmission>;
  displayedColumns: string[] = ['assignment_name', 'assignment_school_instrument_level', 'assignment_student_name', 'assignment_submission_status', 'assignment_feedback_status', 'action'];
  actionType = 'assignmentMark';
  // tableActions?: Array<TableAction> = [TableAction.assignment_mark, TableAction.assignment_instructor_feedback];
  // tableColumns?: Array<TableColumn> = [ TableColumn.position, TableColumn.assignment_name2,
  //   TableColumn.assignment_school, TableColumn.assignment_group, TableColumn.assignment_student_name,
  //   TableColumn.assignment_submission_status, TableColumn.assignment_feedback_datetime, TableColumn.actions];
  // // tableColumns?: Array<TableColumn> = [TableColumn.position, TableColumn.assignment_submission_assignment_name,
  //   TableColumn.assignment_submission_student_name, TableColumn.assignment_submission_submission_status,
  // TableColumn.assignment_submission_due_datetime, TableColumn.assignment_submission_feedback_datetime, TableColumn.actions];
  // , TableColumn.assignment_student, TableColumn.assignment_status
  //   , TableColumn.assignment_due_datetime, TableColumn.assignment_feedback_datetime, TableColumn.actions];
  // filterActions?: Array<FilterAction> = [FilterAction.assignment_school, FilterAction.assignment_group, FilterAction.assignment_feedback];
  assignmentSubmissions: Array<AssignmentSubmission>;
  // instructorDocId = localStorage.getItem('activeDocId');
  assignmentSubmissionDocId: '';
  // @ViewChild(CommonTableComponent) commonTableComponent: CommonTableComponent;
  schoolOptions: string[] = [];
  instrumentOptions: string[] = [];
  levelOptions: string[] = [];
  feedbackStatusOptions: string[] = ['With Feedback', 'Without Feedback'];
  selectedSchoolOptions: string[] = [];
  selectedInstrumentOptions: string[] = [];
  selectedLevelOptions: string[] = [];
  selectedFeedbackStatusOptions: string[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService,
    private translateService: TranslateService,
    private sharedService: SharedService
  ) { }

  async ngOnInit(): Promise<void> {
    this.loggedInAccount = JSON.parse(this.sharedService.getAccount());
    // const dataSource = await this.crudService.read('assignment_submissions').pipe(first()).toPromise();
    // console.log(dataSource);
    this.translateService.use('en');
    const datePipe = new DatePipe(this.translateService.currentLang);
    const loggedInAccount = JSON.parse(this.sharedService.getAccount());
    this.activatedRoute.queryParams.subscribe(async params => {
      this.assignmentSubmissionDocId = params.assignmentSubmissionDocId;
      this.assignmentSubmissions = await this.crudService.read('assignment_submissions',
        'school_instrument_level', 'array-contains-any', loggedInAccount.school_instrument_level).pipe(first()).toPromise();
      const filteredAssignmentSubmissions = [];
      for (const assignmentSubmission of this.assignmentSubmissions) {

        assignmentSubmission.assignment = await this.crudService.readByDocId(
          'assignments', assignmentSubmission.assignment_doc_id).pipe(first()).toPromise();
        if (assignmentSubmission.assignment == null || new Date() < assignmentSubmission.assignment.due_datetime.toDate()) { continue; }
        assignmentSubmission.assignment_name = assignmentSubmission.assignment?.name;
        assignmentSubmission.student = await this.crudService.readByDocId(
          'accounts', assignmentSubmission.student_doc_id).pipe(first()).toPromise();
        assignmentSubmission.student_name = assignmentSubmission.student.first_name + ' ' +
          assignmentSubmission.student.last_name;
        assignmentSubmission.submission_status = 'Last submitted on ' +
          datePipe.transform(assignmentSubmission.submitted_datetime.toDate(), 'EEEE, MMMM d, y, h:mm:ss a');
        assignmentSubmission.feedback_status = 'Not reviewed';
        if (assignmentSubmission.feedback_datetime != null) {
          assignmentSubmission.feedback_status = 'Last marked on ' +
            datePipe.transform(assignmentSubmission.feedback_datetime.toDate(), 'EEEE, MMMM d, y, h:mm:ss a');
        }
        filteredAssignmentSubmissions.push(assignmentSubmission);
      }
      this.assignmentSubmissions = filteredAssignmentSubmissions;
      this.dataSource = this.assignmentSubmissions;
      this.updateSelectOptions();
      // console.log(this.dataSource);
    });
  }
  filterData($event: any, type: string): void {
    // console.log($event.value);
    switch (type) {
      case 'School':
        this.selectedSchoolOptions = $event.value;
        break;
      case 'Instrument':
        this.selectedInstrumentOptions = $event.value;
        break;
      case 'Level':
        this.selectedLevelOptions = $event.value;
        break;
      case 'Feedback Status':
        this.selectedFeedbackStatusOptions = $event.value;
        break;
    }
    const filteredAssignmentSubmissions: Array<AssignmentSubmission> = [];
    for (const assignmentSubmission of this.assignmentSubmissions) {
      for (const schoolInstrumentLevel of assignmentSubmission.school_instrument_level) {
          const schoolInstrumentLevelArr = schoolInstrumentLevel.split('_');
          const school = schoolInstrumentLevelArr[0];
          const instrument = schoolInstrumentLevelArr[1];
          const level = schoolInstrumentLevelArr[2];
          if (
            (this.selectedSchoolOptions.length === 0 || this.selectedSchoolOptions.includes(school)) &&
            (this.selectedInstrumentOptions.length === 0 || this.selectedInstrumentOptions.includes(instrument)) &&
            (this.selectedLevelOptions.length === 0 || this.selectedLevelOptions.includes(level)) &&
            (this.selectedFeedbackStatusOptions.length === 0 ||
              (this.selectedFeedbackStatusOptions.includes('With Feedback') && assignmentSubmission.feedback_status !== 'Not reviewed') ||
              (this.selectedFeedbackStatusOptions.includes('Without Feedback') && assignmentSubmission.feedback_status === 'Not reviewed'))
          ) {
            filteredAssignmentSubmissions.push(assignmentSubmission);
          }
      }
    }
    this.dataSource = filteredAssignmentSubmissions;
    this.updateSelectOptions();
  }

  private updateSelectOptions(): void {
    this.schoolOptions = [];
    this.instrumentOptions = [];
    this.levelOptions = [];
    for (const assignmentSubmission of this.assignmentSubmissions) {
      for (const schoolInstrumentLevel of assignmentSubmission.school_instrument_level) {
          const schoolInstrumentLevelArr = schoolInstrumentLevel.split('_');
          const school = schoolInstrumentLevelArr[0];
          const instrument = schoolInstrumentLevelArr[1];
          const level = schoolInstrumentLevelArr[2];
          if (!this.schoolOptions.includes(school)) {
            this.schoolOptions.push(school);
          }
          if (!this.instrumentOptions.includes(instrument)) {
            this.instrumentOptions.push(instrument);
          }
          if (!this.levelOptions.includes(level)) {
            this.levelOptions.push(level);
          }
        }
      }
    }
}
