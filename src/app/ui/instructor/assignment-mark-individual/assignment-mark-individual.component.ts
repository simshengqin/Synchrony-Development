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
@Component({
  selector: 'app-assignment-mark-individual',
  templateUrl: './assignment-mark-individual.component.html',
  styleUrls: ['./assignment-mark-individual.component.scss']
})
export class AssignmentMarkIndividualComponent implements OnInit {
  loggedInAccount: Account;
  @ViewChild(ConfirmModalComponent) confirmModalComponent: ConfirmModalComponent;
  @Input() assignmentSubmissionDocId: string;
  assignmentSubmission: AssignmentSubmission;
  assignment: Assignment;
  student: Account;
  @ViewChild('scoresheet') scoresheet: ElementRef;
  @ViewChild('feedbackAttachment') feedbackAttachment: ElementRef;
  recordedVideo: Blob;
  seconds: number;
  @ViewChild(VideojsRecordComponent) videojsRecordComponent: VideojsRecordComponent;
  // @ViewChild(VideoPlayerComponent) videoPlayerComponent: VideoPlayerComponent;
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
  constructor(
    private router: Router,
    private toastrService: ToastrService,
    // private httpClient: HttpClient,
    private afStorage: AngularFireStorage,
    private crudService: CrudService,
    private domSanitizer: DomSanitizer
  ) {

  }
  async ngOnInit(): Promise<void> {
    this.loggedInAccount = JSON.parse(sessionStorage.getItem('account'));
    this.assignmentSubmission = await this.crudService.readByDocId(
      'assignment_submissions', this.assignmentSubmissionDocId).pipe(first()).toPromise();
    this.assignment = await this.crudService.readByDocId(
      'assignments', this.assignmentSubmission.assignment_doc_id).pipe(first()).toPromise();
    this.pdfUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.assignmentSubmission.student_attachment_scoresheet);
    this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.assignmentSubmission.student_attachment_recording);
    // console.log(this.pdfUrl);
    // console.log(this.videoUrl);
    // this.pdfUrl = this.domSanitizer.sanitize(SecurityContext.RESOURCE_URL,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl(this.assignmentSubmission.student_attachment_scoresheet));
    // console.log(this.pdfUrl);
    this.student = await this.crudService.readByDocId(
      'accounts', this.assignmentSubmission.student_doc_id).pipe(first()).toPromise();
    // this.assignmentSubmission = await this.assignmentSubmissionService.getAssignmentSubmission(this.assignmentSubmissionDocId)
    //   .pipe(first())
    //   .toPromise();
    // this.assignment = await this.assignmentService.getAssignment(this.assignmentSubmission.assignmentDocId)
    //   .pipe(first())
    //   .toPromise();
    // this.student = await this.studentService.getStudent(this.assignmentSubmission.studentDocId)
    //   .pipe(first())
    //   .toPromise();
    // this.scoresheet.nativeElement.click();

    // tslint:disable-next-line:max-line-length
    // this.httpClient.get('https://firebasestorage.googleapis.com/v0/b/synchrony-8287c.appspot.com/o/assignment_submissions%2FExercises%20for%20Binary%20Trees%20(Answer%20Key).pdf', {responseType: 'blob', headers: {Accept: 'application/pdf'}})
    //   .subscribe(blob => {
    //     saveAs(blob, 'download.pdf');
    //   });

    // this.srcObj = { url: 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf',
    //   withCredentials: true
    // };
    // tslint:disable-next-line:max-line-length
    // this.pdfUrl = 'https://firebasestorage.googleapis.com/v0/b/synchrony-8287c.appspot.com/o/assignment_submissions%2FExercises%20for%20Binary%20Trees%20(Answer%20Key).pdf?alt=media&token=6baeba04-90b0-45e6-8bbb-2e6b90c54abf';
    // tslint:disable-next-line:max-line-length
    // this.pdfUrl = 'https://firebasestorage.googleapis.com/v0/b/synchrony-8287c.appspot.com/o/assignment_submissions%2FExercises%20for%20Binary%20Trees%20(Answer%20Key).pdf?alt=media&token=e074eec1-85f5-4898-b057-734cfb405a2d';
    // this.pdfUrl = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
    // this.pdfUrl = 'gs://synchrony-8287c.appspot.com/assignment_submissions/Exercises for Binary Trees (Answer Key).pdf';
    // console.log(this.pdfUrl);
    // this.downloadFile();
  }
  // public downloadFile(): void {
  //   // let url = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  //   let url = 'https://firebasestorage.googleapis.com/v0/b/synchrony-8287c.appspot.com/
  //   o/assignment_submissions%2FExercises%20for%20Binary%20Trees%20(Answer%20Key).pdf?';
  //   const xhr = new XMLHttpRequest();
  //   xhr.responseType = 'blob';
  //   xhr.onload = (event) => {
  //     /* Create a new Blob object using the response
  //     *  data of the onload object.
  //     */
  //     const blob = new Blob([xhr.response], { type: 'image/jpg' });
  //     const a: any = document.createElement('a');
  //     a.style = 'display: none';
  //     document.body.appendChild(a);
  //     url = window.URL.createObjectURL(blob);
  //     a.href = url;
  //     a.download = 'aaa.pdf';
  //     a.click();
  //     window.URL.revokeObjectURL(url);
  //   };
  //   xhr.open('GET', url);
  //   xhr.send();
  // }
  onCloseModal(response: string): void {
    // console.log(response);
    if (response === 'discard') {
      this.isRecording = true;
      this.isRecorded = false;
    }
  }
  async onFeedback(input: Array<any>): Promise<void>  {
    const filename = this.assignment.name + ' - ' + this.student.last_name + ' ' + this.student.first_name + '\'s Feedback.mp4';
    const path = 'feedbacks/' + filename;
    this.assignmentSubmission.instructor_feedback_attachment_name = filename;
    const task = this.afStorage.upload(path, this.recordedVideo);
    await task.then(async (result) => {
      await result.ref.getDownloadURL().then(
        async (downloadUrl) => {
          // console.log(downloadUrl);
          this.assignmentSubmission.instructor_feedback_attachment = downloadUrl;
          this.assignmentSubmission.feedback = input[0];
          this.assignmentSubmission.grade = input[1];
          this.assignmentSubmission.feedback_datetime = Timestamp.fromDate(new Date());
          await this.crudService.update('assignment_submissions', this.assignmentSubmission.docId, this.assignmentSubmission);
          const newWage: Wage = {
            instructor_account_doc_id: this.loggedInAccount.docId,
            assignment_submission_doc_id: this.assignmentSubmission.docId,
            feedback_datetime: Timestamp.fromDate(new Date()),
            seconds: this.seconds,
            school: this.assignmentSubmission.school
          };
          const wage: Wage[] = await this.crudService.read('wages',
            'instructor_account_doc_id', '==', this.loggedInAccount.docId,
            'assignment_submission_doc_id', '==', this.assignmentSubmission.school,
          ).pipe(first()).toPromise();
          if (wage.length > 0) {
            await this.crudService.update('wages', wage[0].docId, newWage);
          }
          else {
            await this.crudService.create('wages', newWage);
          }
          await this.crudService.update('assignment_submissions', this.assignmentSubmission.docId, this.assignmentSubmission);
          // this.assignmentSubmissionService.updateAssignmentSubmission(this.assignmentSubmission.docId, this.assignmentSubmission)
          //   .then(r => console.log(r));
          this.toastrService.success('Added feedback successfully!', '', {positionClass: 'toast-top-center'});
          this.router.navigate(['instructor/assignment/mark']);
          // console.log(this.assignmentSubmission);
        });
    });
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
    // this.isRecording = true;
    // If the user is re-recording and did not change the recording option, no nee to ask for sharing permissions again
    if (isRecorded && this.selectedRecordingOption === this.recordedOption) {
      this.selectedRecordingOption === 'Camera Recording' ?
        this.cameraVideojs.startRerecording() : this.screenVideojs.startRerecording();
    }
    else {
      this.selectedRecordingOption === 'Camera Recording' ?
        this.cameraVideojs.startRecording() : this.screenVideojs.startRecording();
    }
    // this.player.record().start();
  }
  pauseRecording(): void {
    this.isPaused = true;
    this.selectedRecordingOption === 'Camera Recording' ?
      this.cameraVideojs.pauseRecording() : this.screenVideojs.pauseRecording();
    // this.player.record().pause();
  }
  resumeRecording(): void {
    this.isPaused = false;
    this.selectedRecordingOption === 'Camera Recording' ?
      this.cameraVideojs.resumeRecording() : this.screenVideojs.resumeRecording();
    // this.player.record().resume();
  }
  stopRecording(): void {
    this.isPaused = false;
    this.isRecording = false;
    this.isRecorded = true;
    this.selectedRecordingOption === 'Camera Recording' ?
      this.cameraVideojs.stopRecording() : this.screenVideojs.stopRecording();
    // this.player.record().stop();
  }
  submitFeedback(): void {
    this.confirmModalComponent.open('Submit Feedback', '', ['close', 'submit'], null, this.assignmentSubmission);
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
  // loadVideo(): void {
  //   this.videoPlayerComponent.loadVideo(this.videoInput);
  // }
  //
  // onLoadPdfClick($event: any): void {
  //   this.ngxExtendedPdfViewerComponent.src = $event.target.files.item(0);
  // }
}
