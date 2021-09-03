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
  accountDetail!:any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.validate_session();
    this.url = this.router.url;
  }

  validate_session(): void {
    if(sessionStorage.getItem('account') != null){
      this.accountDetail = JSON.parse(sessionStorage.getItem('account'));
      this.userRole = this.accountDetail.role;
      // console.log(this.accountDetail);
    }else {
      this.router.navigate(['/login']);
    }
    /* // === to be deleted (KIV) === //
    if(sessionStorage.getItem('role') != undefined || sessionStorage.getItem('role') != null){
        this.userRole = sessionStorage.getItem('role')
        console.log(this.userRole)
    } else {
        this.router.navigate(['/login'])
    }
    */
  }

}
