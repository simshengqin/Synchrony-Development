import {Component, OnInit, ViewChild} from '@angular/core';
import {first} from 'rxjs/operators';
import {Assignment} from '../../../core/models/assignment';
import {ActivatedRoute} from '@angular/router';
import {CrudService} from '../../../core/services/crud.service';
import {AssignmentSubmission} from '../../../core/models/assignment-submission';
import {DatePipe} from '@angular/common';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-assignment-view',
  templateUrl: './assignment-view.component.html',
  styleUrls: ['./assignment-view.component.scss']
})
export class AssignmentViewComponent implements OnInit {
  assignments!: Array<Assignment>;
  dataSource: Array<Assignment> = [];
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
  ) { }

  async ngOnInit(): Promise<void> {
    const loggedInAccount = JSON.parse(sessionStorage.getItem('account'));
    // console.log(loggedInAccount);
    this.assignments = await this.crudservice.read('assignments',
    'school_instrument_level', 'array-contains-any', loggedInAccount.school_instrument_level).pipe(first()).toPromise();
    this.translateService.use('en');
    const datePipe = new DatePipe(this.translateService.currentLang);
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
      if (assignmentSubmission.length > 0) {
        assignment.submission_status = 'Last submitted on ' + datePipe.transform(assignmentSubmission[0].submitted_datetime.toDate(), 'EEEE, MMMM d, y, h:mm:ss a');
        // TODO: Get the latest assignment submission
        assignment.assignmentSubmission = assignmentSubmission[0];
      }
      else {
        assignment.submission_status = 'Pending Submission';
      }
      assignment.isOverDueDate = new Date() > assignment.due_datetime.toDate();
    }
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

  }
}
