import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { SharedService } from 'src/app/core/services/sharedservice.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  createTitle: string = "Account & Grouping Creation";
  editTitle: string = "Edit Account & Grouping";
  deleteTitle: string = "Delete Account";
  activityTitle: string = "Activity Log";

  createDescription: string = "Create new user accounts by uploading .csv files.";
  editDescription: string = "Edit existing account details such as name, school, and group.";
  deleteDescription: string = "Delete existing user accounts to remove user access to this application.";
  activityDescription: string = "Access the activity log for instuctors.";

  createLink: string = "/admin/account/create/";
  editLink: string = "/admin/account/edit/";
  deleteLink: string = "/admin/account/delete/";
  activityLink: string = "/admin/activitylog/";

  security_role_access: string = "admin";

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    var accountDetail = JSON.parse(this.sharedService.getAccount()!);
    if(this.security_role_access != accountDetail.role){
      this.router.navigate(['/login']);
      this.toastr.error('Access denied invalid user access detect!', '', {positionClass: 'toast-top-center'});
    }
  }

}
