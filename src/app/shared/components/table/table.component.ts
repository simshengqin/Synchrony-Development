import {Component, OnInit, ViewChild, Input, Output, EventEmitter, OnChanges, ComponentFactoryResolver} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {Router} from "@angular/router";
import {CrudService} from "../../../core/services/crud.service";
import {Account} from "../../../core/models/account";
import { SharedService } from 'src/app/core/services/sharedservice.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit, OnChanges {

  @Input('dataSource') public dataSource: any;
  @Input('displayedColumns') public displayedColumns: any;
  @Input('actionType') public actionType: any;
  @Input('accountUsername') public accountUsername: any; // for admin to not allow to delete his/her own account
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  matTableDataSource: any;
  deleteDataDocId!: string;
  editDataDocId!: string;

  contenteditable:boolean = false;

  @Output() public outputData = new EventEmitter<any>();
  @Output() triggerUpdate = new EventEmitter<any>();

  @Input("username") username: string;
  @Input("first_name") first_name: string;
  @Input("last_name") last_name: string;
  @Input("role") role: string;
  updateArray = [];

  constructor(
    private router: Router,
    private crudService: CrudService,
    private sharedService: SharedService
  ) { }

  ngOnChanges(): void {
    this.populateTable();
  }

  ngOnInit(): void {
    this.populateTable();
  }

  populateTable(): void{
    this.matTableDataSource = new MatTableDataSource(this.dataSource);
    this.matTableDataSource.paginator = this.paginator;
    this.matTableDataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.matTableDataSource.filter = filterValue.trim().toLowerCase();

    if (this.matTableDataSource.paginator) {
      this.matTableDataSource.paginator.firstPage();
    }
  }

  deleteDocId(data: string): void{
    this.deleteDataDocId = data;
    this.sentToParent();
  }

  editDocId(data: string): void{
    this.editDataDocId = data;
    this.sentToParent();
  }

  // Method: sent data to the parent
  sentToParent(): void{
    if (this.deleteDataDocId != null){
      this.outputData.emit(this.deleteDataDocId);
    }
    if (this.editDataDocId != null){
      this.outputData.emit(this.editDataDocId);
    }
  }

  // Modal //
  onOpen(event: any): void {
    // console.log(event);
  }

  onClickPassParameter(route:string, data:any): void {
    this.sharedService.setComponentParameter(data);
    this.router.navigate([route]);
  }

  onMarkClick(assignmentSubmissionDocId: string): void {
    this.router.navigate(['instructor/assignment/mark'], { queryParams: { assignmentSubmissionDocId }});
  }


  test(element) {
    this.router.navigate(['/admin/account/edit/form'], {queryParams: element});
  }
}
