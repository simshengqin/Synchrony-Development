import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.validate_session()
  }

  validate_session(): void {
    if(sessionStorage.getItem('account') != null){
      this.accountDetail = JSON.parse(sessionStorage.getItem('account'));
      this.userRole = this.accountDetail.role;
    }
  }

}
