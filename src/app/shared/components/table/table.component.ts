import {Component, OnInit, ViewChild, Input, Output, EventEmitter, OnChanges, ComponentFactoryResolver} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {Router} from "@angular/router";
import {CrudService} from "../../../core/services/crud.service";
import {Account} from "../../../core/models/account";

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
  ) { }

  ngOnChanges(): void {
    this.populateTable();
  }

  ngOnInit(): void {
    this.populateTable();
  }

  populateTable(): void{
    // console.log(this.dataSource);
    this.matTableDataSource = new MatTableDataSource(this.dataSource);
    this.matTableDataSource.paginator = this.paginator;
    this.matTableDataSource.sort = this.sort;
    // console.log(this.matTableDataSource);
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
    console.log(event);
  }


  onSubmitClick(assignmentDocId: string): void {
    this.router.navigate(['student/assignment/submit'], { queryParams: { assignmentDocId }});
  }
  onFeedbackClick(assignmentSubmissionDocId: string): void {
    this.router.navigate(['student/assignment/feedback'], { queryParams: { assignmentSubmissionDocId }});
  }
  onMarkClick(assignmentSubmissionDocId: string): void {
    this.router.navigate(['instructor/assignment/mark'], { queryParams: { assignmentSubmissionDocId }});
  }

  // editTable($event) {
  //   if(this.contenteditable == true) {
  //     this.contenteditable = false;
  //   } else {
  //     this.contenteditable = true;
  //   }
  // }

  // sendToTable($event) {
  //   console.log("sentToTable activated");
  //   this.updateArray.push(this.username);
  //   this.updateArray.push(this.first_name);
  //   this.updateArray.push(this.last_name);
  //   this.updateArray.push(this.role);
  //   this.triggerUpdate.emit(this.updateArray);
  //   this.updateArray = [];
  // }

  test(element) {
    console.log(element);
    // console.log(this.dataSource);
    this.router.navigate(['/admin/account/edit/form'], {queryParams: element});
  }
}
