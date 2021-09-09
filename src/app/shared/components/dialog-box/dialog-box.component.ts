import { Component, OnInit, AfterViewInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { Account } from '../../../core/models/account';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from "../../../../environments/environment.prod"

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {

  @Input('actionType') public actionType: any;
  @Input('docid') public docid!: any;
  @Input('username') public username!: any;
  // Instructor edit assignment component 
  @Input('assignmentName') public assignmentName!: any;
  // Instructor edit individual assignment component 
  @Input('fileLocationPath') public fileLocationPath!: any;
  @Input('fileName') public fileName!: any;

  storage_bucket = "gs://" + environment.firebase.storageBucket;
  fileType!:string;
  pdfUrl!:any;

  @Output() editEvent = new EventEmitter<string>();
  @Output() triggerUpdate = new EventEmitter<string>();
  @Input() contenteditable = new Boolean;

  constructor(
    private crudservice:CrudService,
    private router: Router,
    private storage: AngularFireStorage,
    private ds:DomSanitizer
  ) { }

  ngOnInit(): void {

  }

  // Modal //
  onOpen(event: any): void {
    console.log(event);
  }

  click_to_delete_account(){
    console.log("User " + this.username + " has be deleted!")
    this.crudservice.delete("accounts",this.docid)
    this.router.navigate(['/admin/account/delete'])
  }

  click_to_delete_assignment(){
    console.log("Assignment deleted!")
    //this.crudservice.delete("accounts",this.docid)
    //this.router.navigate(['/admin/account/delete'])
  }

  acquire_file(){
    this.fileType = this.fileName.split(".")[1];
    this.getPDF()
  }

  getPDF():any{
    var pdf = this.storage_bucket + this.fileLocationPath + this.fileName
    const ref = this.storage.refFromURL(pdf);
    this.pdfUrl = ref.getDownloadURL().subscribe(data => {this.pdfUrl = data})
  }

  returnSafeURL(){
    return this.ds.bypassSecurityTrustResourceUrl(this.pdfUrl)
  }

  click_to_view(){
    console.log("View")
  }

  send_to_parent(value: string) {
    this.editEvent.emit(value);
  }

  make_true($event) {
    this.triggerUpdate.emit($event);
  }
  
  make_false($event) {
    this.send_to_parent($event);
  }

}
