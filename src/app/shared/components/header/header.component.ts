import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  url!: string;
  userRole!: any;
  // user_doc_id!:any;
  // username!:any;

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    this.validate_session();
    this.url = this.router.url;
  }

  validate_session(){
      if(sessionStorage.getItem('role') != null || sessionStorage.getItem('role') != undefined){
        this.userRole = sessionStorage.getItem('role')
    } else {
        this.router.navigate(['/login'])
    }
  }

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
