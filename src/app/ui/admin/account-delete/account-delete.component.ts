import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
//import { Account } from 'src/app/core/models/account';
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
        //console.log(this.accounts);
        this.dataSource = this.accounts
      }
    })
  }
  
}
