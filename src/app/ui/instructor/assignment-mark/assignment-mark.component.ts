import { Component, OnInit } from '@angular/core';
import { first} from 'rxjs/operators';
import { AssignmentSubmission } from '../../../core/models/assignment-submission';
import { CrudService } from '../../../core/services/crud.service';
import { Account } from '../../../core/models/account';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { SharedService } from 'src/app/core/services/sharedservice.service';
import { ToastrService } from "ngx-toastr";
import { Router } from '@angular/router';

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
  assignmentSubmissions: Array<AssignmentSubmission>;
  schoolOptions: string[] = [];
  instrumentOptions: string[] = [];
  levelOptions: string[] = [];
  feedbackStatusOptions: string[] = ['With Feedback', 'Without Feedback'];
  selectedSchoolOptions: string[] = [];
  selectedInstrumentOptions: string[] = [];
  selectedLevelOptions: string[] = [];
  selectedFeedbackStatusOptions: string[] = [];

  security_role_access: string = "instructor";

  constructor(
    private crudService: CrudService,
    private translateService: TranslateService,
    private sharedService: SharedService,
    private toastrService: ToastrService,
    private router: Router,
  ) { }

  async ngOnInit(): Promise<void> {
    this.loggedInAccount = JSON.parse(this.sharedService.getAccount());

    if(this.security_role_access != this.loggedInAccount.role){
      this.router.navigate(['/login']);
      this.toastrService.error('Access denied invalid user access detect!', '', {positionClass: 'toast-top-center'});
    }

    this.translateService.use('en');
    const datePipe = new DatePipe(this.translateService.currentLang);
    const loggedInAccount = JSON.parse(this.sharedService.getAccount());
    this.assignmentSubmissions = await this.crudService.read('assignment_submissions',
        'school_instrument_level', 'array-contains-any', loggedInAccount.school_instrument_level).pipe(first()).toPromise();
    const filteredAssignmentSubmissions = [];
    for (const assignmentSubmission of this.assignmentSubmissions) {
      assignmentSubmission.assignment = await this.crudService.readByDocId(
        'assignments', assignmentSubmission.assignment_doc_id).pipe(first()).toPromise();
      if (assignmentSubmission.assignment == null || new Date() < assignmentSubmission.assignment.due_datetime.toDate()
       ||  Math.floor( Math.abs(new Date().getTime() -
          assignmentSubmission.assignment.due_datetime.toDate().getTime()) / (1000 * 3600 * 24)) > 31
      ) { continue; }
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
  }
  filterData($event: any, type: string): void {
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
