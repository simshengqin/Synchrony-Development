import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
// import {pdfDefaultOptions} from 'ngx-extended-pdf-viewer';
import {HttpClient} from '@angular/common/http';
// import { saveAs } from 'file-saver';
import {AngularFireStorage} from '@angular/fire/storage';
// import {VideojsRecordComponent} from '../../../shared/components/videojs-record/videojs-record.component';
// import {VideoPlayerComponent} from '../../../shared/components/video-player/video-player.component';
// import {NgxExtendedPdfViewerComponent} from 'ngx-extended-pdf-viewer';
@Component({
  selector: 'app-assignment-mark-individual',
  templateUrl: './assignment-mark-individual.component.html',
  styleUrls: ['./assignment-mark-individual.component.scss']
})
export class AssignmentMarkIndividualComponent implements OnInit {

  // @ViewChild(ConfirmModalComponent) confirmModalComponent: ConfirmModalComponent;
  // @Input() assignmentSubmissionDocId: string;
  // assignmentSubmission: AssignmentSubmission;
  // assignment: Assignment;
  // student: Student;
  isRecording = false;
  recorded = false;
  // @ViewChild('scoresheet') scoresheet: ElementRef;
  // @ViewChild('feedbackAttachment') feedbackAttachment: ElementRef;
  // recordedVideo: Blob;
  // @ViewChild(VideojsRecordComponent) videojsRecordComponent: VideojsRecordComponent;
  // @ViewChild(VideoPlayerComponent) videoPlayerComponent: VideoPlayerComponent;
  // @ViewChild('videoInput') videoInput: ElementRef;
  // @ViewChild(NgxExtendedPdfViewerComponent) ngxExtendedPdfViewerComponent: NgxExtendedPdfViewerComponent;
  constructor(
    private router: Router,
    private toastrService: ToastrService,
    // private httpClient: HttpClient,
    private afStorage: AngularFireStorage,
  ) {

  }
  async ngOnInit(): Promise<void> {
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
  //   let url = 'https://firebasestorage.googleapis.com/v0/b/synchrony-8287c.appspot.com/o/assignment_submissions%2FExercises%20for%20Binary%20Trees%20(Answer%20Key).pdf?';
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
  // onCloseModal(response: string) {
  //   console.log(response);
  //   if (response === 'discard') {
  //     this.isRecording = true;
  //     this.recorded = false;
  //   }
  // }
  async onFeedback(feedback: string): Promise<void>  {
    // const filename = this.assignment.name + ' - ' + this.student.firstName + ' ' + this.student.lastName + '\'s Feedback.mp4';
    // const path = 'feedbacks/' + filename;
    // this.assignmentSubmission.instructor_feedback_attachment_name = filename;
    // const task = this.afStorage.upload(path, this.recordedVideo);
    // await task.then(async (result) => {
    //   await result.ref.getDownloadURL().then(
    //     (downloadUrl) => {
    //       console.log(downloadUrl);
    //       this.assignmentSubmission.instructor_feedback_attachment = downloadUrl;
    //       this.assignmentSubmission.feedback = feedback;
    //       this.assignmentSubmission.feedback_datetime = Date.now();
    //       this.assignmentSubmissionService.updateAssignmentSubmission(this.assignmentSubmission.docId, this.assignmentSubmission)
    //         .then(r => console.log(r));
    //       this.toastrService.success('Added feedback successfully!', '', {positionClass: 'toast-top-center'});
    //       this.router.navigate(['assignment/mark']);
    //       console.log(this.assignmentSubmission);
    //     });
    // });
  }
  onRecordClick(): void {
    if (this.recorded) {
      // this.confirmModalComponent.open
      // ('Mark Assignment', 'Are you sure you want to record again? This will delete your previous recording.',
      //   ['close', 'discard'], null, this.assignmentSubmission);
    }
    else {
      // this.videojsRecordComponent.startRecording();
      this.isRecording = true;
    }
  }
  stopRecording(): void {
    this.isRecording = false;
    this.recorded = true;
  }

  submitFeedback(): void {
    // this.confirmModalComponent.open
    // ('Recording Complete', 'Would you like to submit your feedback?', ['close', 'submit'], null, this.assignmentSubmission);
  }
  updateFeedbackAttachment($event: any): void {
    // this.recordedVideo = $event;
    // this.recorded = true;
    // this.feedbackAttachment.nativeElement.href = URL.createObjectURL($event);
    // this.feedbackAttachment.nativeElement.download = 'feedback.mp4';
  }

  onInstructionsClick(): void {
    // this.confirmModalComponent.open
    // ('Recording Instructions', '', ['ok'], null, this.assignmentSubmission);
  }

  loadVideo(): void {
    // this.videoPlayerComponent.loadVideo(this.videoInput);
  }

  onLoadPdfClick($event: any): void {
    // this.ngxExtendedPdfViewerComponent.src = $event.target.files.item(0);
  }
}
