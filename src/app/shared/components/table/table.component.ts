import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input('dataSource') public dataSource:any;
  @Input('displayedColumns') public displayedColumns:any;
  @Input('actionType') public actionType:any;
  @Input('accountUsername') public accountUsername:any; // for admin to not allow to delete his/her own account
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  deleteDataDocId!:string;
  editDataDocId!:string;

  @Output() public outputData = new EventEmitter<any>()

  constructor() { }
  
  ngOnChanges(): void {
    this.populateTable();
  }

  ngOnInit(): void {
    this.populateTable();
  }

  populateTable(){
    console.log(this.dataSource)
    this.dataSource = new MatTableDataSource(this.dataSource);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteDocId(data:string){
    this.deleteDataDocId = data
    this.sentToParent();
  }

  editDocId(data:string){
    this.editDataDocId = data;
    this.sentToParent();
  }

  // Method: sent data to the parent 
  sentToParent(){
    if(this.deleteDataDocId!=null){
      this.outputData.emit(this.deleteDataDocId)
    }
    if(this.editDataDocId!=null){
      this.outputData.emit(this.editDataDocId)
    }
  }

  // Modal //
  onOpen(event:any) {
    console.log(event);
  }



}
