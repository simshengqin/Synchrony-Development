import {Component, OnInit, ViewChild} from '@angular/core';
import {first} from 'rxjs/operators';
import {Assignment} from '../../../core/models/assignment';
import {ActivatedRoute} from '@angular/router';
import {CrudService} from '../../../core/services/crud.service';
import {AssignmentSubmission} from '../../../core/models/assignment-submission';
import {DatePipe} from '@angular/common';
import {TranslateService} from '@ngx-translate/core';
import { SharedService } from 'src/app/core/services/sharedservice.service';

@Component({
  selector: 'app-assignment-view',
  templateUrl: './assignment-view.component.html',
  styleUrls: ['./assignment-view.component.scss']
})
export class AssignmentViewComponent implements OnInit {
  assignments!: Array<Assignment>;
  dataSource: Array<Assignment>;
  displayedColumns: string[] = ['assignment_name',  'assignment_due_datetime', 'assignment_submission_status', 'assignment_instructor', 'action'];
  actionType = 'assignmentView';
  completionStatusOptions: string[] = ['Ongoing', 'Completed'];
  submissionStatusOptions: string[] = ['Pending Submission', 'Submitted'];
  selectedCompletionStatusOptions: string[] = [];
  selectedSubmissionStatusOptions: string[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private crudservice: CrudService,
    private translateService: TranslateService,
    private sharedService:SharedService
  ) { }

  async ngOnInit(): Promise<void> {
    const loggedInAccount = JSON.parse(this.sharedService.getAccount());
    // console.log(loggedInAccount);
    this.assignments = await this.crudservice.read('assignments',
    'school_instrument_level', 'array-contains-any', loggedInAccount.school_instrument_level).pipe(first()).toPromise();
    this.translateService.use('en');
    const datePipe = new DatePipe(this.translateService.currentLang);
    const filteredAssignments = [];
    for (const assignment of this.assignments) {
      assignment.assignment_name = assignment.name;
      assignment.instructor =  await this.crudservice.readByDocId(
        'accounts', assignment.instructor_account_doc_id).pipe(first()).toPromise();
      assignment.submission_status = 'Pending Submission';
      const assignmentSubmission: Array<AssignmentSubmission> =
        await this.crudservice.read('assignment_submissions',
          'student_doc_id', '==', loggedInAccount.docId,
          'assignment_doc_id', '==', assignment.docId).pipe(first()).toPromise();
      // console.log(assignmentSubmission);
      assignment.isOverDueDate = new Date() > assignment.due_datetime.toDate();
      if (assignmentSubmission.length > 0) {
        assignment.submission_status = 'Last submitted on ' + datePipe.transform(assignmentSubmission[0].submitted_datetime.toDate(), 'EEEE, MMMM d, y, h:mm:ss a');
        // TODO: Get the latest assignment submission
        assignment.assignmentSubmission = assignmentSubmission[0];
      }
      else {
        assignment.submission_status = assignment.isOverDueDate ? 'Missing Submission' : 'Pending Submission';
      }
      if (Math.floor( Math.abs(new Date().getTime() -
          assignment.due_datetime.toDate().getTime()) / (1000 * 3600 * 24)) <= 31) {
        filteredAssignments.push(assignment);
      }
    }
    this.assignments = filteredAssignments;
    this.dataSource = this.assignments;
  }

  filterData($event: any, type: string): void {
    // console.log($event.value);
    switch (type) {
      case 'Completion Status':
        this.selectedCompletionStatusOptions = $event.value;
        break;
      case 'Submission Status':
        this.selectedSubmissionStatusOptions = $event.value;
        break;
    }
    const filteredAssignments: Array<Assignment> = [];
    for (const assignment of this.assignments) {
      if (
        (this.selectedCompletionStatusOptions.length === 0 ||
          (this.selectedCompletionStatusOptions.includes('Ongoing') && !assignment.isOverDueDate) ||
          (this.selectedCompletionStatusOptions.includes('Completed') && assignment.isOverDueDate)) &&
        (this.selectedSubmissionStatusOptions.length === 0 ||
          (this.selectedSubmissionStatusOptions.includes('Pending Submission') && assignment.submission_status === 'Pending Submission') ||
          (this.selectedSubmissionStatusOptions.includes('Submitted') && assignment.submission_status !== 'Pending Submission'))
        ) {
        filteredAssignments.push(assignment);
      }
    }
    this.dataSource = filteredAssignments;
    // const filteredAssignmentSubmissions: Array<AssignmentSubmission> = [];
    // for (const assignmentSubmission of this.assignmentSubmissions) {
    //   for (const schoolInstrumentLevel of assignmentSubmission.school_instrument_level) {
    //     const schoolInstrumentLevelArr = schoolInstrumentLevel.split('_');
    //     const school = schoolInstrumentLevelArr[0];
    //     const instrument = schoolInstrumentLevelArr[1];
    //     const level = schoolInstrumentLevelArr[2];
    //     if (
    // (this.selectedSchoolOptions.length === 0 || this.selectedSchoolOptions.includes(school)) &&
    // (this.selectedInstrumentOptions.length === 0 || this.selectedInstrumentOptions.includes(instrument)) &&
    // (this.selectedLevelOptions.length === 0 ||this.selectedLevelOptions.includes(level))
    //     ) {
    //       filteredAssignmentSubmissions.push(assignmentSubmission);
    //     }
    //   }
    //   this.dataSource = filteredAssignmentSubmissions;
  }
}
