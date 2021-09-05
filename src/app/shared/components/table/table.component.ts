import {Component, OnInit, ViewChild, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {Router} from "@angular/router";

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

  @Output() public outputData = new EventEmitter<any>();

  constructor(
    private router: Router,
  ) { }

  ngOnChanges(): void {
    this.populateTable();
  }

  ngOnInit(): void {
    this.populateTable();
  }

  populateTable(): void{
    console.log(this.dataSource);
    this.matTableDataSource = new MatTableDataSource(this.dataSource);
    this.matTableDataSource.paginator = this.paginator;
    this.matTableDataSource.sort = this.sort;
    console.log(this.matTableDataSource);
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
}
