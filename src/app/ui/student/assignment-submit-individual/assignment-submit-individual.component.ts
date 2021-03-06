import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assignment } from '../../../core/models/assignment';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Account } from '../../../core/models/account';
import { CrudService } from '../../../core/services/crud.service';
import { AssignmentSubmission } from '../../../core/models/assignment-submission';
import { AngularFireStorage } from '@angular/fire/storage';
import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;
import { SharedService } from 'src/app/core/services/sharedservice.service';

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
  assignmentSubmissionDocId: string;
  scoresheetFile: File;
  recordingFile: File;
  isUploading: boolean;

  security_role_access: string = "student";

  constructor(
    private crudService: CrudService,
    private router: Router,
    private toastrService: ToastrService,
    private afStorage: AngularFireStorage,
    private sharedService: SharedService
  ) { }

  async ngOnInit(): Promise<void> {

    this.loggedInAccount = JSON.parse(this.sharedService.getAccount());
    if(this.security_role_access != this.loggedInAccount.role){
      this.router.navigate(['/login']);
      this.toastrService.error('Access denied invalid user access detect!', '', {positionClass: 'toast-top-center'});
    }
    this.assignmentDocId = this.sharedService.getComponentParameter();
    this.assignment = await this.crudService.readByDocId('assignments', this.assignmentDocId)
      .pipe(first())
      .toPromise();
    const data = await this.crudService.read('assignment_submissions',
      'student_doc_id', '==', this.loggedInAccount.docId,
      'assignment_doc_id', '==', this.assignment.docId).pipe(first()).toPromise();
    if (data && data.length > 0) {
      this.assignmentSubmission = data[0];
    }
  }
  onGoBackClick(assignment: Assignment): void {
    this.router.navigate(['student/assignment/view']);
  }
  async onSubmitClick(): Promise<void> {
    if (!this.scoresheetFile) {
      this.toastrService.error('Please upload a PDF file!', '', {positionClass: 'toast-top-center'});
    }
    else {
      // Students can have multiple school instrument levels, assignments can also have multiple school instrument level
      // Hence, need to find a list of school instrument level(s) that both the currently logged in student
      // and the selected assignment have! This also explains why assignmentSubmission can have multiple school instrument level
      this.newAssignmentSubmission = {
        assignment_doc_id: this.assignmentDocId,
        instructor_doc_id: this.assignment.instructor_account_doc_id,
        student_doc_id: this.loggedInAccount.docId,
        school: [this.loggedInAccount.school[0]],
        school_instrument_level: this.loggedInAccount.school_instrument_level.filter(
          value => this.assignment.school_instrument_level.includes(value)),
        submitted_datetime: Timestamp.fromDate(new Date()),
        feedback: '',
        instructor_feedback_attachment_name: '',
        instructor_feedback_attachment: '',
        feedback_datetime: null
      };
      // need to create the new assignment submission first to get its doc id, so we know where to store the files in firebase storage
      if (this.assignmentSubmission == null) {
        await this.crudService.create('assignment_submissions', this.newAssignmentSubmission).then((docId) => {
          this.assignmentSubmissionDocId = docId;
        });
      }
      else {
        this.assignmentSubmissionDocId = this.assignmentSubmission.docId;
      }
      this.isUploading = true;
      if (this.scoresheetFile) { await this.uploadFile(this.scoresheetFile, 'scoresheet'); }
      if (this.recordingFile) { await this.uploadFile(this.recordingFile, 'recording'); }
      if (this.assignmentSubmission == null) {
        await this.crudService.update('assignment_submissions', this.assignmentSubmissionDocId, this.newAssignmentSubmission);
        this.toastrService.success('Uploaded assignment submission successfully!', '', {positionClass: 'toast-top-center'});
      } else {
        await this.crudService.update('assignment_submissions', this.assignmentSubmissionDocId, this.assignmentSubmission);
        this.toastrService.success('Updated assignment submission successfully!', '', {positionClass: 'toast-top-center'});
      }
      this.router.navigate(['student/assignment/view']);
    }
  }
  async uploadFile(file: File, type): Promise<void> {
    const path = 'assignment_submissions/' + this.assignmentSubmissionDocId + '/' + file.name;
    const task = this.afStorage.upload(path, file);
    await task.then(async (result) => {
      await result.ref.getDownloadURL().then(
        async (downloadUrl) => {
          if (this.assignmentSubmission == null) {
            if (type === 'scoresheet') {
              this.newAssignmentSubmission.student_attachment_scoresheet = downloadUrl;
              this.newAssignmentSubmission.student_attachment_scoresheet_name = file.name;
            } else if (type === 'recording') {
              this.newAssignmentSubmission.student_attachment_recording = downloadUrl;
              this.newAssignmentSubmission.student_attachment_recording_name = file.name;
            }
          }
          else {
            if (type === 'scoresheet') {
              this.assignmentSubmission.student_attachment_scoresheet = downloadUrl;
              this.assignmentSubmission.student_attachment_scoresheet_name = file.name;
            } else if (type === 'recording') {
              this.assignmentSubmission.student_attachment_recording = downloadUrl;
              this.assignmentSubmission.student_attachment_recording_name = file.name;
            }
          }
        });
    });
  }


}
