import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  createTitle: string = "Account Create";
  editTitle: string = "Account Edit";
  deleteTitle: string = "Account Delete";
  activityTitle: string = "Activity Log";

  createDescription: string = "Create new user accounts by uploading .csv files.";
  editDescription: string = "Edit existing account details such as name, school, and group.";
  deleteDescription: string = "Delete existing user accounts to remove user access to this application.";
  activityDescription: string = "Access the activity log for instuctors.";

  createLink: string = "admin/account/create";
  editLink: string = "admin/account/edit";
  deleteLink: string = "admin/account/delete";
  activityLink: string = "admin/activitylog";

  constructor() { }

  ngOnInit(): void {
  }

}
