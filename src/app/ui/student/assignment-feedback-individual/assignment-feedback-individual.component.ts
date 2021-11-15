import { Component, OnInit } from '@angular/core';
import {first} from 'rxjs/operators';
import {Assignment} from "../../../core/models/assignment";
import {AssignmentSubmission} from "../../../core/models/assignment-submission";
import {ActivatedRoute, Router} from "@angular/router";
import {CrudService} from "../../../core/services/crud.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import { SharedService } from 'src/app/core/services/sharedservice.service';
import {ToastrService} from 'ngx-toastr';

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

  security_role_access: string = "student";

  constructor(
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private crudService: CrudService,
    private domSanitizer: DomSanitizer,
    private sharedService: SharedService
  ) { }

  async ngOnInit(): Promise<void> {

      var loggedInAccount = JSON.parse(this.sharedService.getAccount());
      if(this.security_role_access != loggedInAccount.role){
        this.router.navigate(['/login']);
        this.toastrService.error('Access denied invalid user access detect!', '', {positionClass: 'toast-top-center'});
      }

      this.assignmentSubmissionDocId = this.sharedService.getComponentParameter();
      this.assignmentSubmission = await this.crudService.readByDocId(
        'assignment_submissions', this.assignmentSubmissionDocId).pipe(first()).toPromise();
      this.assignment = await this.crudService.readByDocId(
        'assignments', this.assignmentSubmission.assignment_doc_id).pipe(first()).toPromise();
      this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.assignmentSubmission.instructor_feedback_attachment);
  }
  onGoBackClick(): void {
    this.router.navigate(['student/assignment/view']);
  }

}
