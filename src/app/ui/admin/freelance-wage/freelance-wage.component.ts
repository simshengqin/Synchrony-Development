import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';
import { Account } from '../../../core/models/account';
import { Wages } from '../../../core/models/wages';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-freelance-wage',
  templateUrl: './freelance-wage.component.html',
  styleUrls: ['./freelance-wage.component.scss']
})
export class FreelanceWageComponent implements OnInit {

  wages:any[] = [];
  dataSource!:any;
  displayedColumns:string[] = ['first_name', 'last_name' ,'month', 'number_of_minutes', 'school_abbreviation', 'year'];
  //displayedColumns:string[] = ['month', 'number_of_minutes', 'school_abbreviation', 'year'];
  actionType:string = "wage";
  // set filter data
  schools:string[] = [];
  // set filter name
  nameSchool:string = "School"
  // selected schools 
  selectedSchools:string[] = [];

  /*
  accounts:Account[] = [];
  // set table data
  dataSource!:any;
  displayedColumns:string[] = ['username', 'role', 'school', 'school_instrument_level', 'action'];
  actionType:string = "wage";

  // set filter data
  school_instrument_levels:string[] = [];
  sub_schools:string[] = [];
  sub_instrument:string[] = [];
  sub_levels:string[] = [];
  sub_display_instrument:boolean = false
  sub_display_levels:boolean = false

  // set filter name
  nameSchool:string = "School"
  nameInstrument:string = "Instrument"
  nameLevels:string = "Levels"

  // get filter data
  select_Combine_SchoolInstrumentLevels:string[] = [];
  selectSubSchools:string[] = [];
  selectSubInstruments:string[] = [];
  selectSubLevels:string[] = [];
  */
  constructor(
    private crudservice:CrudService
  ) { }

  ngOnInit(): void {
    //this.retrieve_all_accounts();
    this.retrieve_all_wages();
  }

  async retrieve_all_wages(){
    this.dataSource = [];
    this.wages = [];
    const data = await this.crudservice.read('wages').pipe(first()).toPromise();
    for(var ele of data){
      console.log(ele)
      const instructorData = await this.crudservice.readByDocId('accounts',ele.account_doc_id).pipe(first()).toPromise();
      this.create_wage(ele, instructorData)
      this.set_distint_school(ele.school_abbreviation)
    }
    this.dataSource = this.wages
    console.log(this.dataSource);
  }

  create_wage(data:any, instructorData:any){
    //const instructor = await this.crudservice.readByDocId('accounts',data.account_doc_id).pipe(first()).toPromise();
    //console.log(instructor)
    var wage:any = {
      docId: data.docId,
      first_name: instructorData.first_name,
      last_name: instructorData.last_name,
      account_doc_id: data.account_doc_id,
      month: data.month,
      number_of_minutes: data.number_of_minutes,
      school_abbreviation: data.school_abbreviation,
      year: data.year
    }
    this.wages.push(wage);
  }

  set_distint_school(data:string){
    if(this.schools.indexOf(data)==-1){
      this.schools.push(data)
    }
  }

  get_query_data_sub_schools($event:any):void{
    this.selectedSchools = $event.value
    console.log(this.selectedSchools)
    if(this.selectedSchools.length==0){
      this.retrieve_all_wages();
    } else{
      this.filter_wages_by_selected_school();
    }
  }

  async filter_wages_by_selected_school(){
    this.dataSource = [];
    this.wages = [];
    const data = await this.crudservice.read('wages','school_abbreviation','in',this.selectedSchools).pipe(first()).toPromise();
    console.log(data)
    for(var ele of data){
      console.log(ele)
      const instructorData = await this.crudservice.readByDocId('accounts',ele.account_doc_id).pipe(first()).toPromise();
      this.create_wage(ele, instructorData)
    }
    this.dataSource = this.wages
  }



  /*
  async retrieve_all_accounts(){
    const data = await this.crudservice.read('accounts','role','==','instructor').pipe(first()).toPromise();
    if(data!=undefined||data!=null){
      //this.dataSource = data
      for(var ele of data){
        try{
          this.create_account(ele)
          var school_instrument_level = ele["school_instrument_level"]
          this.set_distint_school_instrument_level(school_instrument_level);
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
    console.log(this.select_Combine_SchoolInstrumentLevels)
  }

  // Method:
  query_table_with_filter(){
    var result:Account[] = [];
    result = this.accounts;
    if(this.select_Combine_SchoolInstrumentLevels.length!=0){
      result = this.filtering_by_school_instrument_levels(result, this.select_Combine_SchoolInstrumentLevels)
    }
    if(this.select_Combine_SchoolInstrumentLevels.length == 0){
      result = this.accounts;
    }
    this.dataSource = result
  }

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

  edit_doc_id($event:any){
    console.log($event);
  } */

}
