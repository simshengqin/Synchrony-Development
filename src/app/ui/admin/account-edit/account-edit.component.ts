import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { Account } from 'src/app/core/models/Account';
import { first } from 'rxjs/operators';
import { EditableTableModule } from 'ng-editable-table/editable-table/editable-table.module';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.scss']
})
export class AccountEditComponent implements OnInit {

  accounts:Account[] = [];
  // set table data
  dataSource!:any;
  displayedColumns:string[] = ['username', 'first_name', 'last_name', 'role', 'school', 'group', 'action'];
  actionType:string = "accountEdit";

  // set filter data
  schools:string[] = [];
  groups:string[] = [];
  instruments:string[] = [];
  levels:string[] = [];
  roles:string[] = ["admin","instructor","student"];
  // set filter name
  nameSchool:string = "School"
  nameGroup:string = "Group"
  nameRole:string = "Role"
  // get filter data
  selectRoles:string[] = [];
  selectSchools:string[] = [];
  selectGroups:string[] = [];

  constructor(
    private crudservice:CrudService
  ) { }

  ngOnInit(): void {
    this.retrieve_all_accounts();
  }

  ngAfterViewInit(){
    // empty
  }

  async retrieve_all_accounts(){
    const data = await this.crudservice.read('accounts').pipe(first()).toPromise();
    if(data!=undefined||data!=null){
      //this.dataSource = data
      for(var ele of data){
        try{
          this.create_account(ele)
          var schoolgrp = ele["school_instrument_level"].split("_")
          var school = ele["school"].split(",")
          //this.set_distint_school_levels(ele["levels"])
          //this.set_distint_school_instruments(ele["instruments"])
          // get distint school groups
          this.set_distint_school_group(schoolgrp);
          // get distint school 
          this.set_distint_school(school);
        } catch(e){
          console.log("something wrong with the data! check the database!")
          console.log(e)
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
      school_group: data.school_group,
      first_name: data.first_name,
      last_name: data.last_name,
      password: data.password,
      first_login: data.first_login
    };
    this.accounts.push(account);
  }
  /*
  retrieve_all_accounts(){
    this.crudservice.read('accounts').subscribe(async (data:any) => {
      if(data!=undefined||data!=null){
        for(let ele of data){
          this.accounts.push(ele)
        }
        this.dataSource = data
        // Filter Entry
        for(var ele of data){
          var schoolgrp = ele["school_group"].split(",")
          var school = ele["school"].split(",")
          //this.set_distint_school_levels(ele["levels"])
          //this.set_distint_school_instruments(ele["instruments"])
          // get distint school groups
          this.get_distint_school_group(schoolgrp);
          // get distint school
          this.get_distint_school(school);
        }
        //console.log(this.groups)
        //console.log(this.schools)
        // End of Filter
      }
    })
  }
  */
  
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
  get_querry_data_roles($event:any):void{
    this.selectRoles = $event.value
    this.query_table_with_filter()
  }
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
    console.log(this.selectRoles.length);
    if(this.selectRoles.length!=0){
      result = this.filtering(result, this.selectRoles)
    }
    if(this.selectSchools.length!=0){
      result = this.filtering(result, this.selectSchools)
    }
    if(this.selectGroups.length!=0){
      result = this.filtering(result, this.selectGroups)
    }
    if(this.selectRoles.length ==0 && this.selectSchools.length ==0 && this.selectGroups.length ==0){
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

  edit_doc_id($event:any):void{
    if($event!=""||$event!=null){
      console.log($event)
      this.crudservice.update("accounts", this.accounts[0].docId, this.accounts)
      var result:Account[] = []
      // for(var ele of this.dataSource){
      //   if(ele.docId != $event){
      //     result.push(ele)
      //   }
      // }
      // this.dataSource = result;
    } else {
      console.log("There is no account to edit!")
    }
  }


}
