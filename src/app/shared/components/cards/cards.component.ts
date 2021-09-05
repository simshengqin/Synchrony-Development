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

  constructor() { }

  ngOnInit(): void {
  }

}
