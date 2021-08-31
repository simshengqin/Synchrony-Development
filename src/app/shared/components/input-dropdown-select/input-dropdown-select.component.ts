import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-input-dropdown-select',
  templateUrl: './input-dropdown-select.component.html',
  styleUrls: ['./input-dropdown-select.component.scss']
})
export class InputDropdownSelectComponent implements OnInit {

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

/*
export class InputDropdownSelectComponent implements OnInit {

  @Input('schools') public schools!:any;
  @Input('groups') public groups!:any;
  @Input('roles') public roles!:any; 
  
  inputData = new FormControl();
  inputDataList!:any;
  name!:string;

  @Output() public outputData = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
    //this.get_filter_options();
    console.log(this.inputDataList)
  }

  ngOnChanges(): void {
    //this.get_filter_options();
  }

    get_filter_options(){
    if(this.roles!=null){
      this.inputDataList = this.roles;
      this.name = "Roles";
    }
    if(this.groups!=null){
      this.inputDataList = this.groups;
      this.name = "Groups";
    }
    if(this.schools!=null){
      this.inputDataList = this.schools
      this.name = "Schools";
    } 
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
*/
