import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
//import { Account } from 'src/app/core/models/account';
import { CrudService } from 'src/app/core/services/crud.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-account-delete',
  templateUrl: './account-delete.component.html',
  styleUrls: ['./account-delete.component.scss']
})
export class AccountDeleteComponent implements OnInit, AfterViewInit {

  /*
  accounts:any[] = [];
  dataSource!:any;
  displayedColumns: string[] = ['username', 'role', 'school', 'group', 'action'];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  */
  constructor(
    private crudservice:CrudService
  ) { }

  ngOnInit(): void {
    //this.retrieve_all_accounts();
  }

  ngAfterViewInit(){

  }

  /*
  retrieve_all_accounts(){
    this.crudservice.read('accounts').subscribe(async (data:any) => {
      if(data!=undefined||data!=null){
        for(let ele of data){
          this.accounts.push(ele)
        }
        console.log(this.accounts);
        this.dataSource = new MatTableDataSource(this.accounts);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(data:string){
    console.log(data)
  }
  */

}
