import {Component, ElementRef, EventEmitter, Input, OnInit, Output, SecurityContext, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
// import {pdfDefaultOptions} from 'ngx-extended-pdf-viewer';
import {HttpClient} from '@angular/common/http';
// import { saveAs } from 'file-saver';
import {AngularFireStorage} from '@angular/fire/storage';
import {AssignmentSubmission} from '../../../core/models/assignment-submission';
import {Assignment} from '../../../core/models/assignment';
import {Account} from '../../../core/models/account';
import {VideojsRecordComponent} from '../../../shared/components/videojs-record/videojs-record.component';
import {NgxExtendedPdfViewerComponent} from 'ngx-extended-pdf-viewer';
import {CrudService} from '../../../core/services/crud.service';
import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {ConfirmModalComponent} from '../../../shared/components/confirm-modal/confirm-modal.component';
import {Wage} from "../../../core/models/wage";
// import {VideoPlayerComponent} from '../../../shared/components/video-player/video-player.component';
import { SharedService } from 'src/app/core/services/sharedservice.service';

@Component({
  selector: 'app-assignment-mark-individual',
  templateUrl: './assignment-mark-individual.component.html',
  styleUrls: ['./assignment-mark-individual.component.scss']
})
export class AssignmentMarkIndividualComponent implements OnInit {
  loggedInAccount: Account;
  @ViewChild(ConfirmModalComponent) confirmModalComponent: ConfirmModalComponent;
  assignmentSubmissionDocId: string;
  assignmentSubmission: AssignmentSubmission;
  assignment: Assignment;
  student: Account;
  @ViewChild('scoresheet') scoresheet: ElementRef;
  @ViewChild('feedbackAttachment') feedbackAttachment: ElementRef;
  recordedVideo: Blob;
  seconds: number;
  @ViewChild(VideojsRecordComponent) videojsRecordComponent: VideojsRecordComponent;
  @ViewChild('videoInput') videoInput: ElementRef;
  @ViewChild(NgxExtendedPdfViewerComponent) ngxExtendedPdfViewerComponent: NgxExtendedPdfViewerComponent;
  pdfUrl: SafeResourceUrl;
  videoUrl: SafeResourceUrl;
  contentEditable = true;
  selectedRecordingOption = 'Screen Recording';
  @ViewChild('cameraVideojs') cameraVideojs;
  @ViewChild('screenVideojs') screenVideojs;
  isRecording = false;
  isPaused = false;
  isRecorded = false;
  recordedOption = '';
  feedback = '';
  startDatetime = null;

  security_role_access: string = "instructor";

  constructor(
    private router: Router,
    private toastrService: ToastrService,
    private afStorage: AngularFireStorage,
    private crudService: CrudService,
    private domSanitizer: DomSanitizer,
    private sharedService: SharedService
  ) {

  }
  async ngOnInit(): Promise<void> {
    this.loggedInAccount = JSON.parse(this.sharedService.getAccount());
    if(this.security_role_access != this.loggedInAccount.role){
      this.router.navigate(['/login']);
      this.toastrService.error('Access denied invalid user access detect!', '', {positionClass: 'toast-top-center'});
    }
    this.assignmentSubmissionDocId = this.sharedService.getComponentParameter();
    this.startDatetime = new Date ();
    this.assignmentSubmission = await this.crudService.readByDocId(
      'assignment_submissions', this.assignmentSubmissionDocId).pipe(first()).toPromise();
    this.assignment = await this.crudService.readByDocId(
      'assignments', this.assignmentSubmission.assignment_doc_id).pipe(first()).toPromise();
    this.pdfUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.assignmentSubmission.student_attachment_scoresheet);
    this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.assignmentSubmission.student_attachment_recording);
    this.student = await this.crudService.readByDocId(
      'accounts', this.assignmentSubmission.student_doc_id).pipe(first()).toPromise();
  }

  onCloseModal(response: string): void {
    if (response === 'discard') {
      this.isRecording = true;
      this.isRecorded = false;
    }
  }

  async onFeedback(input: Array<any>): Promise<void>  {
    if (this.recordedVideo != null) {
      const filename = this.assignment.name + ' - ' + this.student.last_name + ' ' + this.student.first_name + '\'s Feedback.mp4';
      const path = 'feedbacks/' + filename;
      this.assignmentSubmission.instructor_feedback_attachment_name = filename;
      const task = this.afStorage.upload(path, this.recordedVideo);
      await task.then(async (result) => {
        await result.ref.getDownloadURL().then(
          async (downloadUrl) => {
            this.assignmentSubmission.instructor_feedback_attachment = downloadUrl;
          });
      });
    }
    console.log( (new Date().getTime() - this.startDatetime.getTime()) / 1000);
    const newWage: Wage = {
      instructor_account_doc_id: this.loggedInAccount.docId,
      assignment_submission_doc_id: this.assignmentSubmission.docId,
      feedback_datetime: Timestamp.fromDate(new Date()),
      seconds: parseFloat(((new Date().getTime() - this.startDatetime.getTime()) / 1000).toFixed(3)),
      school: this.assignmentSubmission.school[0]
    };
    const wage: Wage[] = await this.crudService.read('wages',
      'instructor_account_doc_id', '==', this.loggedInAccount.docId,
      'assignment_submission_doc_id', '==', this.assignmentSubmission.docId,
    ).pipe(first()).toPromise();
    if (wage.length > 0) {
      await this.crudService.update('wages', wage[0].docId, newWage);
      console.log("Update! wage")
    }
    else {
      await this.crudService.create('wages', newWage);
      console.log("Create! new wage")
    }
    this.assignmentSubmission.feedback = input[0];
    this.assignmentSubmission.grade = input[1];
    this.assignmentSubmission.feedback_datetime = Timestamp.fromDate(new Date());
    await this.crudService.update('assignment_submissions', this.assignmentSubmission.docId, this.assignmentSubmission);
    this.toastrService.success('Added feedback successfully!', '', {positionClass: 'toast-top-center'});
    await this.router.navigate(['instructor/assignment/mark']);
  }

  onRecordClick(): void {
    if (this.isRecorded) {
      this.confirmModalComponent.open
      ('Mark Assignment', 'Are you sure you want to record again? This will delete your previous recording.',
        ['close', 'discard'], null, this.assignmentSubmission);
    }
    else {
      this.videojsRecordComponent.startRecording();
      this.isRecording = true;
    }
  }

  startRecording(isRecorded: boolean): void {
    // If the user is re-recording and did not change the recording option, no nee to ask for sharing permissions again
    if (isRecorded && this.selectedRecordingOption === this.recordedOption) {
      this.selectedRecordingOption === 'Camera Recording' ?
        this.cameraVideojs.startRerecording() : this.screenVideojs.startRerecording();
    }
    else {
      this.selectedRecordingOption === 'Camera Recording' ?
        this.cameraVideojs.startRecording() : this.screenVideojs.startRecording();
    }
  }
  pauseRecording(): void {
    this.isPaused = true;
    this.selectedRecordingOption === 'Camera Recording' ?
      this.cameraVideojs.pauseRecording() : this.screenVideojs.pauseRecording();
  }

  resumeRecording(): void {
    this.isPaused = false;
    this.selectedRecordingOption === 'Camera Recording' ?
      this.cameraVideojs.resumeRecording() : this.screenVideojs.resumeRecording();
  }

  stopRecording(): void {
    this.isPaused = false;
    this.isRecording = false;
    this.isRecorded = true;
    this.selectedRecordingOption === 'Camera Recording' ?
      this.cameraVideojs.stopRecording() : this.screenVideojs.stopRecording();
  }

  submitFeedback(): void {
    this.confirmModalComponent.open('Submit Feedback', '', ['close', 'submit'], null, this.assignmentSubmission);
  }

  submitTextFeedback(): void {
    this.confirmModalComponent.open('Confirm Feedback Submission', '', ['close', 'submit'], null, this.assignmentSubmission, null
      , '', this.feedback);
  }

  updateFeedbackAttachment(input: Array<any>): void {
    this.recordedVideo = input[0];
    this.seconds = input[1];
    this.isRecording = false;
    this.isRecorded = true;
    this.recordedOption = this.selectedRecordingOption;
    this.feedbackAttachment.nativeElement.href = URL.createObjectURL(this.recordedVideo);
    this.feedbackAttachment.nativeElement.download = 'feedback.mp4';
  }

  onInstructionsClick(): void {
    this.confirmModalComponent.open
    ('Recording Instructions', '', ['ok'], null, this.assignmentSubmission);
  }

  onGoBackClick(): void {
    this.router.navigate(['instructor/assignment/mark']);
  }

}
