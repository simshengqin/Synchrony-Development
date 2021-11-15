import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { Wage } from 'src/app/core/models/wage';
import { Account } from 'src/app/core/models/account';
import { first } from 'rxjs/operators';
import { CrudService } from 'src/app/core/services/crud.service'; 
import { SharedService } from 'src/app/core/services/sharedservice.service';
import { ToastrService } from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-instructor-activity-log',
  templateUrl: './instructor-activity-log.component.html',
  styleUrls: ['./instructor-activity-log.component.scss']
})
export class InstructorActivityLogComponent implements OnInit {

  // Instrustor's account information via session
  instrustor!:Account;
  schools:string[]=[];

  // Table 
  dataSource!:any;
  displayedColumns:string[] = ['school_abbreviation', 'action'];
  actionType:string = "instructorActivityLog"

  security_role_access: string = "instructor";

  is_loading_data: boolean = true;

  constructor(
    private crudservice:CrudService,
    private sharedService:SharedService,
    private router: Router,
    private toastrService: ToastrService,
    ) 
    { }

  ngOnInit(): void {
    this.is_loading_data = true;
    this.get_instrustor_account_details()
    this.retrieve_wage()
  }

  get_instrustor_account_details(){
    this.instrustor = JSON.parse(this.sharedService.getAccount()!);
    if(this.security_role_access != this.instrustor.role){
      this.router.navigate(['/login']);
      this.toastrService.error('Access denied invalid user access detect!', '', {positionClass: 'toast-top-center'});
    }
  }

  async retrieve_wage(){
    var result = []
    const data = await this.crudservice.read('wages','instructor_account_doc_id','==',this.instrustor.docId).pipe(first()).toPromise();
    for(var ele of data){
      if(this.schools.indexOf(ele["school"])==-1){
        this.schools.push(ele["school"])
        result.push(this.create_custom_wage(ele["school"]))
      }
    }
    this.dataSource = result
    this.is_loading_data = false;
  }

  create_custom_wage(school:string){
    var data = {
      school_abbreviation: school,
      key: this.instrustor.docId + "_" + school
    }
    return data
  }

}
