import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { Wage } from 'src/app/core/models/wage';
import { Account } from 'src/app/core/models/account';
import { first } from 'rxjs/operators';
import { CrudService } from 'src/app/core/services/crud.service'; 

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

  constructor(
    private crudservice:CrudService) 
    { }

  ngOnInit(): void {
    this.get_instrustor_account_details()
    this.retrieve_wage()
  }

  get_instrustor_account_details(){
    this.instrustor = JSON.parse(sessionStorage.getItem("account")!);
  }

  async retrieve_wage(){
    var result:any = []
    const data = await this.crudservice.read('wages','instructor_account_doc_id','==',this.instrustor.docId).pipe(first()).toPromise();
    for(var ele of data){
      if(this.schools.indexOf(ele["school"][0])==-1){
        this.schools.push(ele["school"][0])
        result.push(this.create_custom_wage(ele["school"][0]))
      }
    }
    this.dataSource = result
  }

  create_custom_wage(school:string){
    var data:any = {
      school_abbreviation: school,
      key: this.instrustor.docId + "_" + school
    }
    return data
  }

}
