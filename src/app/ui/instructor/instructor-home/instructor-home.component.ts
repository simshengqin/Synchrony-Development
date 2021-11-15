import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/core/services/sharedservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor-home',
  templateUrl: './instructor-home.component.html',
  styleUrls: ['./instructor-home.component.scss']
})
export class InstructorHomeComponent implements OnInit {
  createStudentTitle: string = "Create Student";
  newTitle: string = "New Assignment";
  editTitle: string = "Edit Assignment";
  markTitle: string = "Mark Assignment";
  activityTitle: string = "My Activity Log"

  createStudentDescription: string = "Create new accounts for students.";
  newDescription: string = "Create new assignments for students to complete.";
  editDescription: string = "Edit created assignments' deadline, attachments and more.";
  markDescription: string = "Mark or re-mark assignment submissions by students.";
  activityDescription: string = "View my activity logs, based on graded feedback on student."

  createStudentLink: string = "/instructor/account/create/";
  newLink: string = "/instructor/assignment/create/";
  editLink: string = "/instructor/assignment/edit/";
  markLink: string = "/instructor/assignment/mark/";
  activityLink: string = "/instructor/activitylog/";

  security_role_access: string = "instructor";

  constructor(
    private sharedService:SharedService,
    private router: Router,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    var instrustor = JSON.parse(this.sharedService.getAccount()!);
    if(this.security_role_access != instrustor.role){
      this.router.navigate(['/login']);
      this.toastrService.error('Access denied invalid user access detect!', '', {positionClass: 'toast-top-center'});
    }
  }

}
