import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-input-dropdown-select',
  templateUrl: './input-dropdown-select.component.html',
  styleUrls: ['./input-dropdown-select.component.scss']
})
export class InputDropdownSelectComponent {

  @Input('inputDataList') public inputDataList!: any;
  @Input('name') public name!: any;

  selectedData!: any;

  @Output() public outputData = new EventEmitter<any>();

  constructor() { }


  // Method: get the dropdown list values and prepare to sent to parent
  selected_value(event: MatSelectChange): void {
    this.selectedData = {
      value: event.value,
    };
    this.sentToParent();
  }

  // Method: sent data to the parent
  public sentToParent(): void{
    this.outputData.emit(this.selectedData);
  }

}

