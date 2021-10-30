import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SharedService } from 'src/app/core/services/sharedservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  url!: string;
  userRole!: any;
  accountDetail!:any;
  account!:any;

  constructor(
    private router: Router,
    private sharedservice:SharedService
  ) { }

  ngOnInit(): void {
    this.validate_session();
    this.url = this.router.url;
  }

  validate_session(): void {
    if(JSON.parse(this.sharedservice.getAccount()) != null){
      this.accountDetail = JSON.parse(this.sharedservice.getAccount());
      this.userRole = this.accountDetail.role;
      console.log(this.userRole);
    }else {
      this.router.navigate(['/login']);
    }
  }

}
