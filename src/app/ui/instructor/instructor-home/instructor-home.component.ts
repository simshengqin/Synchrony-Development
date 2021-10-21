import { Component, OnInit } from '@angular/core';

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

  createStudentDescription: string = "Create new accounts for students.";
  newDescription: string = "Create new assignments for students to complete.";
  editDescription: string = "Edit created assignments' deadline, attachments and more.";
  markDescription: string = "Mark or re-mark assignment submissions by students.";

  createStudentLink: string = "instructor/account/create";
  newLink: string = "instructor/assignment/create";
  editLink: string = "instructor/assignment/edit";
  markLink: string = "instructor/assignment/mark";

  constructor() { }

  ngOnInit(): void {
  }

}
