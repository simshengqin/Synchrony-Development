import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';
import { Account } from '../../../core/models/account';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-freelance-wage',
  templateUrl: './freelance-wage.component.html',
  styleUrls: ['./freelance-wage.component.scss']
})
export class FreelanceWageComponent implements OnInit {

  accounts:Account[] = [];
  // set table data
  dataSource!:any;
  displayedColumns:string[] = ['username', 'school', 'group', 'action'];
  actionType:string = "wage";
  // set filter data
  schools:string[] = [];
  groups:string[] = [];
  instruments:string[] = [];
  levels:string[] = [];
  // set filter name
  nameSchool:string = "School"
  nameGroup:string = "Group"
  // get filter data
  selectSchools:string[] = [];
  selectGroups:string[] = [];

  constructor(
    private crudservice:CrudService
  ) { }

  ngOnInit(): void {
    this.retrieve_all_accounts();
  }

  async retrieve_all_accounts(){
    const data = await this.crudservice.read('accounts','role','==','instructor').pipe(first()).toPromise();
    if(data!=undefined||data!=null){
      for(var ele of data){
        try{
          this.create_account(ele)
          var schoolgrp = ele["school_group"].split(",")
          var school = ele["school"].split(",")
          //this.set_distint_school_levels(ele["levels"])
          //this.set_distint_school_instruments(ele["instruments"])
          // get distint school groups
          this.set_distint_school_group(schoolgrp);
          // get distint school 
          this.set_distint_school(school);
        } catch(e){
          console.log("something wrong with the data! check the database!")
        }
      }
      this.dataSource = this.accounts
    }
  }

  create_account(data:any){
    var account: Account = {
      docId: data.docId,
      username: data.username,
      role: data.role,
      school: data.school,
      school_instrument_level: data.school_instrument_level,
      first_name: data.first_name,
      last_name: data.last_name,
      password: data.password,
      first_login: data.first_login
    };
    this.accounts.push(account);
  }

  // == set filter results == //
  // Method:
  set_distint_school_levels(data:string[]){
    for(var ele of data){
      if(this.levels.indexOf(ele)==-1){
        this.groups.push(ele)
      }
    }
  }
  // Method:
  set_distint_school_instruments(data:string[]){
    for(var ele of data){
      if(this.instruments.indexOf(ele)==-1){
        this.groups.push(ele)
      }
    }
  }
  // Method:
  set_distint_school_group(data:string[]){
    for(var dataSchoolGrp of data){
      if(this.groups.indexOf(dataSchoolGrp)==-1){
        this.groups.push(dataSchoolGrp)
      }
    }
  }
  // Method: 
  set_distint_school(data:string[]){
    for(var dataSchool of data){
      if(this.schools.indexOf(dataSchool)==-1){
        this.schools.push(dataSchool)
      }
    }
  }

  // == get filter == //
  get_querry_data_schools($event:any):void{
    this.selectSchools = $event.value
    this.query_table_with_filter()
  }
  get_querry_data_groups($event:any):void{
    this.selectGroups = $event.value
    this.query_table_with_filter()
  }

  // Method: 
  query_table_with_filter(){
    var result:Account[] = [];
    result = this.accounts;
    if(this.selectSchools.length!=0){
      result = this.filtering(result, this.selectSchools)
    }
    if(this.selectGroups.length!=0){
      result = this.filtering(result, this.selectGroups)
    }
    if(this.selectSchools.length ==0 && this.selectGroups.length ==0){
      result = this.accounts;
    }
    this.dataSource = result
  }

  // Method: filtering function 
  filtering(result:Account[], filter:string[]):Account[]{
    var filterResult:Account[] = [];
    var exist:boolean = false;
    for(var ele of result){
      for(var role of filter){
        if(ele.role == role){
          for(var eleResult of filterResult){
            if(eleResult.docId == ele.docId){
              exist = true
            }
          }
          if(!exist){
            filterResult.push(ele)
            exist = false
          }
        }
      }
    }
    return filterResult
  } // End of Method

  edit_doc_id($event:any){
    console.log($event);
  }

}
