import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Assignment} from '../../../core/models/assignment';
import {first} from 'rxjs/operators';
// import {AssignmentService} from '../../../core/services/assignment.service';
// import {ConfirmModalComponent} from '../../../shared/components/confirm-modal/confirm-modal.component';
// import {AngularFireStorage} from '@angular/fire/storage';
// import {Observable} from 'rxjs';
// import {AssignmentSubmission} from '../../../core/models/assignment-submission';
// import {Instructor} from '../../../core/models/instructor';
// import {InstructorService} from '../../../core/services/instructor.service';
// import {StudentService} from '../../../core/services/student.service';
// import {Student} from '../../../core/models/student';
// import {AssignmentSubmissionService} from '../../../core/services/assignment-submission.service';
import {ToastrService} from 'ngx-toastr';
import {Account} from '../../../core/models/account';
import {CrudService} from '../../../core/services/crud.service';
import {AssignmentSubmission} from '../../../core/models/assignment-submission';
import {AngularFireStorage} from '@angular/fire/storage';
import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

@Component({
  selector: 'app-assignment-submit-individual',
  templateUrl: './assignment-submit-individual.component.html',
  styleUrls: ['./assignment-submit-individual.component.scss']
})
export class AssignmentSubmitIndividualComponent implements OnInit {
  loggedInAccount: Account;
  assignmentDocId: string;
  assignment: Assignment;
  assignmentSubmission: AssignmentSubmission = null;
  newAssignmentSubmission: AssignmentSubmission;
  // @ViewChild(ConfirmModalComponent) confirmModalComponent: ConfirmModalComponent;
  @ViewChild('scoresheetFile') scoresheetFile: ElementRef;
  @ViewChild('recordingFile') recordingFile: ElementRef;
  // progress: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService,
    private router: Router,
    private toastrService: ToastrService,
    private afStorage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
    this.loggedInAccount = JSON.parse(sessionStorage.getItem('account'));
    this.activatedRoute.queryParams.subscribe(async params => {
      this.assignmentDocId = params.assignmentDocId;
      this.assignment = await this.crudService.readByDocId('assignments', params.assignmentDocId)
        .pipe(first())
        .toPromise();
      // this.assignment = await this.assignmentService.getAssignment(this.assignmentDocId)
      //   .pipe(first())
      //   .toPromise();
      // const assignmentSubmission: Array<AssignmentSubmission> =
      const data = await this.crudService.read('assignment_submissions',
        'student_doc_id', '==', this.loggedInAccount.docId,
        'assignment_doc_id', '==', this.assignment.docId).pipe(first()).toPromise();
      if (data && data.length > 0) {
        this.assignmentSubmission = data[0];
      }
      // this.assignmentSubmissionService.getAssignmentSubmissionsByStudentAndAssignment(
      //   localStorage.getItem('activeDocId'), this.assignmentDocId)
      //   .subscribe(async (assignmentSubmissions) => {
      //   this.assignmentSubmission = assignmentSubmissions[assignmentSubmissions.length - 1];
      // console.log(this.assignmentSubmission);
      // });
    });

  }
  onGoBackClick(assignment: Assignment): void {
    this.router.navigate(['student/assignment/view']);
  }
  async onSubmitClick(): Promise<void> {
    if (!this.scoresheetFile.nativeElement.files.item(0) && !this.recordingFile.nativeElement.files.item(0)) {
      this.toastrService.error('Please upload a file!', '', {positionClass: 'toast-top-center'});
    }
    else {
      this.newAssignmentSubmission = {
        assignment_doc_id: this.assignmentDocId,
        instructor_doc_id: this.assignment.instructor_account_doc_id,
        student_doc_id: this.loggedInAccount.docId,
        school: this.loggedInAccount.school[0],
        school_instrument_level: this.loggedInAccount.school_instrument_level[0],
        submitted_datetime: Timestamp.fromDate(new Date()),
        feedback: '',
        instructor_feedback_attachment_name: '',
        instructor_feedback_attachment: '',
        feedback_datetime: null
      };
      if (this.scoresheetFile.nativeElement.files.item(0)) { await this.uploadFile(this.scoresheetFile, 'scoresheet'); }
      if (this.recordingFile.nativeElement.files.item(0)) { await this.uploadFile(this.recordingFile, 'recording'); }
      if (this.assignmentSubmission != null) {
        console.log('update');
        console.log(this.assignmentSubmission);
        await this.crudService.update('assignment_submissions', this.assignmentSubmission.docId, this.newAssignmentSubmission);
        this.toastrService.success('Updated assignment submission successfully!', '', {positionClass: 'toast-top-center'});
        this.router.navigate(['student/assignment/view']);
      } else {
        console.log(this.assignmentSubmission);
        await this.crudService.create('assignment_submissions', this.newAssignmentSubmission);
        this.toastrService.success('Uploaded assignment submission successfully!', '', {positionClass: 'toast-top-center'});
        this.router.navigate(['student/assignment/view']);
      }

    }
  }
  async uploadFile(file, type): Promise<void> {
    const path = 'assignment_submissions/' + file.nativeElement.files.item(0).name;
    console.log(file.nativeElement.files.item(0));
    const task = this.afStorage.upload(path, file.nativeElement.files.item(0));
    await task.then(async (result) => {
      await result.ref.getDownloadURL().then(
        async (downloadUrl) => {
          console.log(downloadUrl);
          if (type === 'scoresheet') {
            this.newAssignmentSubmission.student_attachment_scoresheet = downloadUrl;
            this.newAssignmentSubmission.student_attachment_scoresheet_name = file.nativeElement.files.item(0).name;
          } else if (type === 'recording') {
            this.newAssignmentSubmission.student_attachment_recording = downloadUrl;
            this.newAssignmentSubmission.student_attachment_recording_name = file.nativeElement.files.item(0).name;
          }

        });
    });
  }


}
