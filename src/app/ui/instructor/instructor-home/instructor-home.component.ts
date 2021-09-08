import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor-home',
  templateUrl: './instructor-home.component.html',
  styleUrls: ['./instructor-home.component.scss']
})
export class InstructorHomeComponent implements OnInit {

  newTitle: string = "New Assignment";
  editTitle: string = "Edit Assignment";
  markTitle: string = "Mark Assignment";

  newDescription: string = "description";
  editDescription: string = "description";
  markDescription: string = "description";

  newLink: string = "instructor/assignment/create";
  editLink: string = "instructor/assignment/edit";
  markLink: string = "instructor/assignment/mark";

  constructor() { }

  ngOnInit(): void {
  }

}
