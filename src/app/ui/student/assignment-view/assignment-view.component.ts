import {Component, OnInit, ViewChild} from '@angular/core';
import {first} from 'rxjs/operators';
import {Assignment} from '../../../core/models/assignment';
import {ActivatedRoute} from '@angular/router';
import {CrudService} from "../../../core/services/crud.service";
import {AssignmentSubmission} from "../../../core/models/assignment-submission";
import {DatePipe} from "@angular/common";
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-assignment-view',
  templateUrl: './assignment-view.component.html',
  styleUrls: ['./assignment-view.component.scss']
})
export class AssignmentViewComponent implements OnInit {
  dataSource!: Array<Assignment>;
  displayedColumns: string[] = ['assignment_name', 'assignment_submission_status', 'assignment_due_datetime', 'assignment_instructor', 'action'];
  actionType = 'assignmentSubmit';
  // tableActions?: Array<TableAction> = [TableAction.assignment_submit, TableAction.assignment_resubmit, TableAction.assignment_student_feedback];
  // showOngoing = true;
  // tableColumns?: Array<TableColumn> = [TableColumn.position, TableColumn.assignment_name, TableColumn.assignment_submission_status,
  //   TableColumn.assignment_due_datetime, TableColumn.assignment_instructor, TableColumn.actions];
  // [TableColumn.assignment_name,
  //   TableColumn.assignment_status, TableColumn.assignment_due_datetime,
  //   TableColumn.assignment_instructor, TableColumn.actions];
  // filterActions?: Array<FilterAction> = [FilterAction.assignment_completion_status];
  // assignments: Array<Assignment> = [];
  // @ViewChild(CommonTableComponent) commonTableComponent: CommonTableComponent;
  constructor(
    // private studentService: StudentService,
    // private assignmentService: AssignmentService,
    // private instructorService: InstructorService,
    // private assignmentSubmissionService: AssignmentSubmissionService,
    private activatedRoute: ActivatedRoute,
    private crudservice: CrudService,
    private translateService: TranslateService,
    // private filterService: FilterService,
  ) { }

  async ngOnInit(): Promise<void> {
    const loggedInAccount = JSON.parse(sessionStorage.getItem('account'));
    // console.log(loggedInAccount);
    const assignments = await this.crudservice.read('assignments',
    'school_instrument_level', 'array-contains-any', loggedInAccount.school_instrument_level).pipe(first()).toPromise();
    this.translateService.use('en');
    const datePipe = new DatePipe(this.translateService.currentLang);
    for (const assignment of assignments) {
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
      }
      else {
        assignment.submission_status = 'Pending Submission';
      }
    }
    this.dataSource = assignments;
    // console.log(this.dataSource);
    // const student = await this.studentService.getStudent(localStorage.getItem('activeDocId'))
    //   .pipe(first())
    //   .toPromise();
    // console.log(student);
    // this.activatedRoute.queryParams.subscribe(async params => {
    //   const school = student.school;
    //   const group = student.group;
    //   const assignmentCompletionStatus = params.assignment_completion_status ? params.assignment_completion_status : '';
    //   this.filterService.get('assignments',
    //     'school', '==', school,
    //     'group', '==', group).subscribe(async (assignments) => {
    //       const filteredAssignments = [];
    //       for (let i = 0; i < assignments.length; i++) {
    //         const assignment = assignments[i];
    //         // console.log(assignment.dueDatetime, Date.now(), Date.now() > assignment.dueDatetime);
    //         if (assignmentCompletionStatus === '' ||
    //           assignmentCompletionStatus === 'Ongoing' && Date.now() <= assignment.dueDatetime ||
    //           assignmentCompletionStatus === 'Completed' && Date.now() > assignment.dueDatetime) {
    //           assignment.assignmentCompletionStatus = assignmentCompletionStatus;
    //           const instructor = await this.instructorService.getInstructor(assignment.instructorDocId)
    //             .pipe(first())
    //             .toPromise();
    //           assignment.instructor = instructor;
    //           assignment.instructor_name = assignment.instructor?.firstName + ' ' +
    //             assignment.instructor?.lastName;
    //           this.assignmentSubmissionService.getAssignmentSubmissionsByStudentAndAssignment(
    //             localStorage.getItem('activeDocId'), assignment.docId)
    //             .subscribe(async (assignmentSubmissions) => {
    //               assignment.assignmentSubmission = assignmentSubmissions[assignmentSubmissions.length - 1];
    //               assignment.submitted_datetime = assignment.assignmentSubmission?.submitted_datetime;
    //               filteredAssignments.push(assignment);
    //               // console.log('bbb');
    //               // console.log(assignment.assignmentSubmission);
    //             });
    //
    //         }
    //
    //
    //       }
    //       this.assignments = filteredAssignments;
    //       console.log(this.assignments);
    //       this.commonTableComponent.loadTableData(this.assignments);
    //   });
    // });
    // console.log(this.assignments);
  }

}
