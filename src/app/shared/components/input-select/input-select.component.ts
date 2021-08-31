import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent implements OnInit {

  @Input('inputDataList') public inputDataList!:any;
  @Input('name') public name!:any;

  selectedData!:any;

  @Output() public outputData = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
    //empty
  }

  // Method: get the dropdown list values and prepare to sent to parent
  selected_value(event: MatSelectChange) {
    this.selectedData = {
      value: event.value,
      //text: event.source.triggerValue
    };
    this.sentToParent()
  }

  // Method: sent data to the parent 
  public sentToParent(){
    this.outputData.emit(this.selectedData)
  }

}
