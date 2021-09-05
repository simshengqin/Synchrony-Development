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
  freelanceTitle: string = "Freelance";

  createDescription: string = "description";
  editDescription: string = "description";
  deleteDescription: string = "description";
  freelanceDescription: string = "description";

  createLink: string = "admin/account/create";
  editLink: string = "admin/account/edit";
  deleteLink: string = "admin/account/delete";
  freelanceLink: string = "admin/freelance";

  constructor() { }

  ngOnInit(): void {
  }

}
