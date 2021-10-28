import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/core/services/sharedservice.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input('title') public title: any;
  @Input('description') public description: any;
  @Input('imgsrc') public imgsrc: any;
  @Input('href') public href: any;

  userRole!: any;
  accountDetail!:any;

  constructor(
    private sharedservice:SharedService,
  ) { }

  ngOnInit(): void {
    this.validate_session()
  }

  validate_session(): void {
    if(JSON.parse(this.sharedservice.getAccount()) != null){
      this.accountDetail = JSON.parse(this.sharedservice.getAccount());
      this.userRole = this.accountDetail.role;
    }
  }

}
