import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {first} from 'rxjs/operators';
import {AssignmentSubmission} from '../../../core/models/assignment-submission';
import {CrudService} from '../../../core/services/crud.service';
import {Account} from '../../../core/models/account';

@Component({
  selector: 'app-assignment-mark',
  templateUrl: './assignment-mark.component.html',
  styleUrls: ['./assignment-mark.component.scss']
})
export class AssignmentMarkComponent implements OnInit {
  accountUsername!: '';
  dataSource!: Array<AssignmentSubmission>;
  displayedColumns: string[] = ['student_name', 'submission_status', 'feedback_status', 'action'];
  actionType = 'assignment_mark';
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
  // assignmentSubmissions: Array<AssignmentSubmission>;
  instructorDocId = localStorage.getItem('activeDocId');
  assignmentSubmissionDocId: '';
  // @ViewChild(CommonTableComponent) commonTableComponent: CommonTableComponent;
  constructor(
    private activatedRoute: ActivatedRoute,
    private crudservice: CrudService,
  ) { }

  async ngOnInit(): Promise<void> {
    // const account: Account = {
    //   username: csvRecord.username,
    //   role: csvRecord.role,
    //   school: csvRecord.school,
    //   school_instrument_level: csvRecord.school_instrument_level,
    //   first_name: csvRecord.first_name,
    //   last_name: csvRecord.last_name,
    //   password: csvRecord.password,
    //   first_login: true,
    //   assignment_doc_id?: 'L64vRDampr23ZC3GrS8j',
    //   instructor_doc_id?: 'Ejq8BKzGlikF5nEpd6KN',
    //   student_doc_id?: 'u7OpBkGAOtosqxpaEaIK',
    //   school?: '';
    //   school_instrument_level?: '';
    //   submitted_datetime?: number;
    //   student_attachment_scoresheet?: '';
    //   student_attachment_scoresheet_name?: '';
    //   student_attachment_recording?: '';
    //   student_attachment_recording_name?: '';
    //   feedback?: '',
    //   instructor_feedback_attachment_name?: string,
    //   instructor_feedback_attachment?: '';
    //   feedback_datetime?: number;
    //   grade?: number;
    // };
    // if (accounts.length === 0) {
    //   console.log(account);
    //   await this.crudService.create('accounts', account); // .then(r => {const ownerDocId = r; } );
    // } else {
    //   await this.crudService.update('accounts', accounts[0].docId, account);
    // }
    const dataSource = await this.crudservice.read('assignments_submissions_and_feedback').pipe(first()).toPromise();
    console.log(dataSource);
    // this.activatedRoute.queryParams.subscribe(async params => {
    //   this.assignmentSubmissionDocId = params.assignmentSubmissionDocId;
    //   const school = params.assignment_school ? params.assignment_school : '';
    //   const group = params.assignment_group ? params.assignment_group : '';
    //   const assignmentFeedback = params.assignment_feedback ? params.assignment_feedback : '';
    //   const filterOp4 = assignmentFeedback === 'With Feedback' ? '!=' : '==';
    //   const filterVal4 = assignmentFeedback === '' ? '' : -1;
    //   console.log(school + ',' + group + ',' + assignmentFeedback + ',');
    //   this.filterService.get('assignment_submissions', 'instructorDocId', '==', this.instructorDocId,
    //     'school', '==', school,
    //     'group', '==', group,
    //     'feedback_datetime', filterOp4, filterVal4).subscribe(async (assignmentSubmissions) => {
    //     for (const assignmentSubmission of assignmentSubmissions) {
    //       assignmentSubmission.student = await this.studentService.getStudent(assignmentSubmission.studentDocId)
    //         .pipe(first())
    //         .toPromise();
    //       assignmentSubmission.student_name = assignmentSubmission.student.firstName + ' ' +
    //         assignmentSubmission.student.lastName;
    //       assignmentSubmission.assignment = await this.assignmentService.getAssignment(assignmentSubmission.assignmentDocId)
    //         .pipe(first())
    //         .toPromise();
    //       assignmentSubmission.assignment_name = assignmentSubmission.assignment.name;
    //     }
    //     this.assignmentSubmissions = assignmentSubmissions;
    //     this.commonTableComponent.loadTableData(this.assignmentSubmissions);
    //   });
    // });
  }
}
