import { Component, OnInit } from '@angular/core';
import {first} from 'rxjs/operators';
import {Assignment} from "../../../core/models/assignment";
import {AssignmentSubmission} from "../../../core/models/assignment-submission";
import {ActivatedRoute, Router} from "@angular/router";
import {CrudService} from "../../../core/services/crud.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
// import {AssignmentSubmission} from '../../../core/models/assignment-submission';
// import {AssignmentSubmissionService} from '../../../core/services/assignment-submission.service';
// import {ActivatedRoute, Router} from '@angular/router';
// import {Assignment} from '../../../core/models/assignment';
// import {AssignmentService} from '../../../core/services/assignment.service';
import { SharedService } from 'src/app/core/services/sharedservice.service';

@Component({
  selector: 'app-assignment-feedback-individual',
  templateUrl: './assignment-feedback-individual.component.html',
  styleUrls: ['./assignment-feedback-individual.component.scss']
})
export class AssignmentFeedbackIndividualComponent implements OnInit {
  assignmentSubmission: AssignmentSubmission;
  assignmentSubmissionDocId: string;
  assignment: Assignment;
  videoUrl: SafeResourceUrl;
  constructor(
    // private assignmentSubmissionService: AssignmentSubmissionService,
    // private assignmentService: AssignmentService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private crudService: CrudService,
    private domSanitizer: DomSanitizer,
    private sharedService: SharedService
  ) { }

  async ngOnInit(): Promise<void> {
      this.assignmentSubmissionDocId = this.sharedService.getComponentParameter();
      this.assignmentSubmission = await this.crudService.readByDocId(
        'assignment_submissions', this.assignmentSubmissionDocId).pipe(first()).toPromise();
      this.assignment = await this.crudService.readByDocId(
        'assignments', this.assignmentSubmission.assignment_doc_id).pipe(first()).toPromise();
      this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.assignmentSubmission.instructor_feedback_attachment);
      // console.log(this.videoUrl);
      // this.assignmentSubmission = await this.assignmentSubmissionService.getAssignmentSubmission(this.assignmentSubmissionDocId)
      //   .pipe(first())
      //   .toPromise();
      // this.assignment = await this.assignmentService.getAssignment(this.assignmentSubmission.assignmentDocId)
      //   .pipe(first())
      //   .toPromise();
      // console.log(this.assignmentSubmission);
  }
  onGoBackClick(): void {
    this.router.navigate(['student/assignment/view']);
  }

}
