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
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { environment } from '../../../../environments/environment.prod';
import {ToastrService} from 'ngx-toastr';


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

  storage_bucket = 'gs://' + environment.firebase.storageBucket;
  fileType!: string;
  pdfUrl!: any;
  pdfSafeUrl: SafeResourceUrl;
  videoUrl!: any;

  @Output() editEvent = new EventEmitter<string>();
  @Output() triggerUpdate = new EventEmitter<string>();
  @Input() contenteditable = new Boolean;

  constructor(
    private crudservice: CrudService,
    private router: Router,
    private storage: AngularFireStorage,
    private ds: DomSanitizer,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

  }

  // Modal //
  onOpen(event: any): void {
    console.log(event);
  }

  click_to_delete_account(){
    console.log('User ' + this.username + ' has be hidden!');
    const data = {
      is_delete: true,
      password: this.genPassword()
    };
    this.crudservice.update('accounts', this.docid, data);
    this.showMessageSuccess('The following user: ' + this.username + ' account has been successfully deleted');
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/admin/account/delete']);
  });
  }

  async click_to_delete_assignment(){
      console.log('Assignment deleted!');
      console.log(this.docid);
      this.fileLocationPath = "/assignment/" + this.docid + "/";
      const data = await this.crudservice.readByDocId('assignments', this.docid).pipe(first()).toPromise();
      console.log(data)
      for(var file of data["file_names"]){
        console.log("file to be delete:" + file)
        this.storage.storage.refFromURL(this.storage_bucket + this.fileLocationPath + file).delete();
      }
      this.crudservice.delete('assignments', this.docid);
      this.showMessageSuccess('The following assignment, title: ' + this.assignmentName + ' has been successfully deleted');
      this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/instructor/assignment/edit']);
    });
  }

  /*
  async delete_assignment_from_storage(docid){
    console.log(docid)
    this.fileLocationPath = "/assignment/" + docid + "/";
    const data = await this.crudservice.readByDocId('assignments', docid).pipe(first()).toPromise();
    console.log(data)
    for(var file of data["file_names"]){
      console.log("file to be delete:" + file)
      this.storage.storage.refFromURL(this.storage_bucket + this.fileLocationPath + file).delete();
    }
  }
  */

  acquire_file(){
    const arr = this.fileName.split('.');
    this.fileType = arr[arr.length - 1];
    console.log(this.fileType);
    if (this.fileType === 'pdf'){
      this.getPDF();
    }
    if (this.fileType === 'mp4'){
      this.getVideo();
    }
  }

  async getPDF(): Promise<any> {
    const pdf = this.storage_bucket + this.fileLocationPath + this.fileName;
    const ref = this.storage.refFromURL(pdf);
    // return this.pdfUrl = ref.getDownloadURL().subscribe(data => {this.pdfUrl = data})
    this.pdfUrl = await ref.getDownloadURL().subscribe(data => {
      this.pdfUrl = data;
    });
    this.pdfSafeUrl = this.ds.bypassSecurityTrustResourceUrl(this.pdfUrl);
    console.log(this.pdfSafeUrl);
    return this.pdfSafeUrl;
  }

  getVideo(): any{
    const video = this.storage_bucket + this.fileLocationPath + this.fileName;
    const ref = this.storage.refFromURL(video);
    ref.getDownloadURL().subscribe(data => {this.videoUrl = data})
    return this.videoUrl = ref.getDownloadURL().subscribe(data => {this.videoUrl = data; });
    // console.log(ref.getDownloadURL().subscribe(data => {this.videoUrl = data}))
    // console.log(this.videoUrl)
  }

  returnSafeURL(){
    return this.ds.bypassSecurityTrustResourceUrl(this.pdfUrl);
  }

  click_to_view(){
    console.log('View');
  }

  send_to_parent(value: string) {
    this.editEvent.emit(value);
  }

  make_true($event) {
    this.triggerUpdate.emit($event);
    this.send_to_parent($event);
  }

  make_false($event) {
    this.send_to_parent($event);
  }

  goBack() {
    console.log("dialogBox");
    this.router.navigate(['/admin/account/edit']);
  }

  // Method: auto generate a radnom password
  private genPassword(): string{
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < 20; i++) {
      password += CHARS.charAt(
        Math.floor(Math.random() * CHARS.length)
      );
    }
    return password;
  }

  private showMessageSuccess(message: string) {
    if (message == null || message == ''){
      message = 'Success!';
    }
    this.toastr.success(message);
  }

  private showMessageError(message: string) {
    if (message == null || message == ''){
      message = 'Error!';
    }
    this.toastr.error(message);
  }

}
