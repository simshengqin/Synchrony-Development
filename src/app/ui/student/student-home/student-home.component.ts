import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/core/services/sharedservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {

  security_role_access: string = "student";

  constructor(
    private sharedService:SharedService,
    private router: Router,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    if(JSON.parse(this.sharedService.getAccount()) != null){
      var student  = JSON.parse(this.sharedService.getAccount());
      if(this.security_role_access != student.role){
        this.router.navigate(['/login']);
        this.toastrService.error('Access denied invalid user access detect!', '', {positionClass: 'toast-top-center'});
      }
    } else{
      this.router.navigate(['/login']);
    }
  }

}
