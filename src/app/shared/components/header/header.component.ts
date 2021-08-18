import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userRole!: any;
  // user_doc_id!:any;
  // username!:any;

  constructor(
    // private router:Router
  ) { }

  ngOnInit(): void {
    // this.validate_session();
  }

  // validate_session(){
  //   if(sessionStorage.getItem('role') == null){
  //     this.user_role = "admin"
  //     //this.router.navigate(['/login'])
  //   }
  //   if(sessionStorage.getItem('doc_id') == null){
  //     this.user_doc_id = ""
  //     //this.router.navigate(['/login'])
  //   }
  //   if(sessionStorage.getItem('username') == null){
  //     this.username = ""
  //     //this.router.navigate(['/login'])
  //   }
  // }
  // async onSubmitClick() {
  //   if (!this.scoresheetFile.nativeElement.files.item(0) && !this.recordingFile.nativeElement.files.item(0)) {
  //     this.toastrService.error('Please upload a file!', '',{positionClass: 'toast-top-center'}); this.toastrService.error('Please upload a file!', '',{positionClass: 'toast-top-center'});
  //   }
  //   else {
  //     if (this.scoresheetFile.nativeElement.files.item(0)) { await this.uploadFile(this.scoresheetFile, 'scoresheet'); }
  //     if (this.recordingFile.nativeElement.files.item(0)) { await this.uploadFile(this.recordingFile, 'recording'); }
  //     this.router.navigate(['assignment/view']);
  //   }
  // }
  // END OF validate_session()

}
