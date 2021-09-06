import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { Account } from '../../../core/models/account';
import { first } from 'rxjs/operators';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.scss']
})
export class AccountEditComponent implements OnInit, AfterViewInit {

  accounts:Account[] = [];
  accountDetail!:Account;
  accountUsername!:string;
  // set table data
  dataSource!:any;
  displayedColumns:string[] = ['username', 'role', 'school', 'school_instrument_level', 'action'];
  actionType:string = "accountEdit";

  // === set filter data === //
  //schools:string[] = [];
  school_instrument_levels:string[] = [];
  //groups:string[] = [];
  //instruments:string[] = [];
  //levels:string[] = [];
  roles:string[] = ["admin","instructor","student"];

  sub_schools:string[] = [];
  sub_instrument:string[] = [];
  sub_levels:string[] = [];

  sub_display_instrument:boolean = false
  sub_display_levels:boolean = false

  // === set filter name === //
  nameSchool:string = "School"
  //nameGroup:string = "Group"
  nameRole:string = "Role"
  nameSchoolInstrumentLevels = "School Instrument Levels"
  nameInstrument:string = "Instrument"
  nameLevels:string = "Levels"

  // === get filter data === //
  selectRoles:string[] = [];
  selectSchools:string[] = [];
  //selectGroups:string[] = [];
  selectGroups:string[] = [];
  //selectSchoolInstrumentLevels:string[] = [];
  select_Combine_SchoolInstrumentLevels:string[] = [];
  selectSubSchools:string[] = [];
  selectSubInstruments:string[] = [];
  selectSubLevels:string[] = [];

  contenteditable: string = "false";

  constructor(
    private crudservice:CrudService
  ) { }

  ngOnInit(): void {
    this.retrieve_all_accounts();
    this.accountDetail = JSON.parse(sessionStorage.getItem("account")!);
    this.accountUsername = this.accountDetail.username
  }

  ngAfterViewInit(){
    // empty
  }

  async retrieve_all_accounts(){
    const data = await this.crudservice.read('accounts').pipe(first()).toPromise();
    if(data!=undefined||data!=null){
      this.dataSource = data
      for(var ele of data){
        try{
          this.create_account(ele)
          //var schoolgrp = ele["school_group"].split(",")
          //var school = ele["school"].split(",")
          //var school = ele["school"]
          var school_instrument_level = ele["school_instrument_level"]
          //this.set_distint_school_levels(ele["levels"])
          //this.set_distint_school_instruments(ele["instruments"])
          // get distint school groups
          //this.set_distint_school_group(schoolgrp);
          // get distint school
          //this.set_distint_school(school);
          this.set_distint_school_instrument_level(school_instrument_level);
        } catch(e){
          console.log("something wrong with the data! check the database!")
        }
      }
      this.dataSource = this.accounts
    }
  }

  create_account(data:any){
    if(data.school[0] == "-"){
      data.school[0] = "NA";
    }
    if(data.school_instrument_level[0] == "-"){
      data.school_instrument_level[0] = "NA";
    }
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

   // Method:
   set_distint_school_instrument_level(data:string[]){
    for(var dataSchoolInstrumentLevel of data){
      var sub_query = dataSchoolInstrumentLevel.split("_")
      var school = sub_query[0];
      var instrument = sub_query[1];
      var level = sub_query[2];
      if(this.sub_schools.indexOf(school)==-1){
        this.sub_schools.push(school)
      }
      if(this.sub_instrument.indexOf(instrument)==-1){
        this.sub_instrument.push(instrument)
      }
      if(this.sub_levels.indexOf(level)==-1){
        this.sub_levels.push(level)
      }
    }
  }

  // == get filter == //
  get_query_data_roles($event:any):void{
    this.selectRoles = $event.value
    this.query_table_with_filter()
  }
  /*
  get_query_data_schools($event:any):void{
    this.selectSchools = $event.value
    this.query_table_with_filter()
  } */
  /*
  get_query_data_groups($event:any):void{
    this.selectGroups = $event.value
    this.query_table_with_filter()
  } */
  /*
  get_query_data_school_instrument_level($event:any):void{
    this.selectSchools = $event.value
    this.query_table_with_filter()
  } */

  get_query_data_sub_schools($event:any):void{
    this.selectSubSchools = $event.value
    if(this.selectSubSchools.length == 0){
      this.sub_display_instrument = false
      this.sub_display_levels = false
    } else {
      this.sub_display_instrument = true
      this.sub_display_levels = false
    }
  }
  get_query_data_sub_instruments($event:any):void{
    this.selectSubInstruments = $event.value
    if(this.selectSubInstruments.length == 0){
      this.sub_display_levels = false
    } else {
      this.sub_display_levels = true
    }
  }
  get_query_data_sub_levels($event:any):void{
    this.selectSubLevels = $event.value
    this.combine_querry_search_data()
    this.query_table_with_filter()
  }

  // Method: Combine all the permutation of the sub Strings of School, Instrument and levels
  combine_querry_search_data(){
    console.log(this.selectSubSchools)
    console.log(this.selectSubInstruments)
    console.log(this.selectSubLevels)
    this.select_Combine_SchoolInstrumentLevels = [];
    for(var eleSchool of this.selectSubSchools){
      console.log(eleSchool)
      for(var eleInstrument of this.selectSubInstruments){
        for(var eleLevel of this.selectSubLevels){
          var query = eleSchool + "_" + eleInstrument + "_" + eleLevel
          console.log(query);
          if(this.select_Combine_SchoolInstrumentLevels.indexOf(query)==-1){
            this.select_Combine_SchoolInstrumentLevels.push(query)
          }
        }
      }
    }
    //console.log(this.select_Combine_SchoolInstrumentLevels)
  }

  // Method:
  query_table_with_filter(){
    var result:Account[] = [];
    result = this.accounts;
    if(this.selectRoles.length!=0){
      result = this.filtering_by_role(result, this.selectRoles)
    }
    if(this.select_Combine_SchoolInstrumentLevels.length!=0){
      result = this.filtering_by_school_instrument_levels(result, this.select_Combine_SchoolInstrumentLevels)
    }
    /*
    if(this.selectSchools.length!=0){
      result = this.filtering_by_school(result, this.selectSchools)
    } */

    //console.log(result)
    /*
    if(this.selectSchoolInstrumentLevels.length!=0){
      result = this.filtering(result, this.selectSchoolInstrumentLevels)
    } */
    /*
    if(this.selectGroups.length!=0){
      result = this.filtering(result, this.selectGroups)
    } */
    /*
    if(this.selectRoles.length ==0 && this.selectSchools.length ==0 && this.selectGroups.length ==0){
      result = this.accounts;
    }
    */
    if(this.selectRoles.length == 0 && this.select_Combine_SchoolInstrumentLevels.length == 0){
      result = this.accounts;
    }
    this.dataSource = result

    /*
    const data = await this.crudservice.read('accounts',"role","in",this.selectRoles).pipe(first()).toPromise();
    */
    /*
    this.crudservice.read("accounts",
      "role","in",this.selectRoles,
      "school","array-contains-any",this.selectSchools,
      "school_group","array-contains-any",this.selectGroups).subscribe(async (data:any) => {
      this.dataSource = data
    }) */
  }

  filtering_by_role(result:Account[], filter:string[]):Account[]{
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
  }

   // Brute force method
   filtering_by_school_instrument_levels(result:Account[], filter:string[]):Account[]{
    var filterResult:Account[] = [];
    var exist:boolean = false;
    for(var ele of result){
      var school_instrument_levels = ele.school_instrument_level
      for(var query of filter){
        for(var school_instrument_level of school_instrument_levels){
          if(school_instrument_level == query){
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
    }
    return filterResult
  }

  edit_doc_id($event:any):void{
    if($event!=""||$event!=null){
      console.log($event)
      this.crudservice.update("accounts", this.accounts[0].docId, this.accounts)
      var result:Account[] = []
      for(var ele of this.dataSource){
        if(ele.docId != $event){
          result.push(ele)
        }
      }
      this.dataSource = result;
    } else {
      console.log("There is no account to update!")
    }
  }

  test():void {
    if(this.contenteditable == "true") {
      this.contenteditable = "false";
      console.log(this.dataSource);
    } else {
      this.contenteditable = "true";
      console.log(this.dataSource);
    }
  }

}