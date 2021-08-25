import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TableComponent } from 'src/app/shared/components/table/table.component';

@Component({
  selector: 'app-account-delete',
  templateUrl: './account-delete.component.html',
  styleUrls: ['./account-delete.component.scss']
})
export class AccountDeleteComponent implements OnInit, AfterViewInit {

  accounts:any[] = [];
  dataSource!:any;
  displayedColumns:string[] = ['username', 'role', 'school', 'group', 'action'];
  
  schools:string[] = [];
  groups:string[] = [];
  roles:string[] = ["admin","instructor","freelancer","student"];

  
  constructor(
    private crudservice:CrudService
  ) { }

  ngOnInit(): void {
    this.retrieve_all_accounts();
  }

  ngAfterViewInit(){
    // empty
  }

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

  // Method:
  get_distint_school_group(data:string[]){
    for(var dataSchoolGrp of data){
      if(this.groups.indexOf(dataSchoolGrp)==-1){
        this.groups.push(dataSchoolGrp)
      }
    }
  }

  // Method: 
  get_distint_school(data:string[]){
    for(var dataSchool of data){
      if(this.schools.indexOf(dataSchool)==-1){
        this.schools.push(dataSchool)
      }
    }
  }
  get_querry_data_roles($event:any):void{
    //console.log("this is roles!: ")
    console.log($event.value)
  }
  get_querry_data_schools($event:any):void{
    //console.log("this is school!: ")
    console.log($event.value)
  }
  get_querry_data_groups($event:any):void{
    //console.log("this is group!: ")
    console.log($event.value)
  }

}
