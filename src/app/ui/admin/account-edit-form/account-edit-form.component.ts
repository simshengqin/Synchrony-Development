import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account-edit-form',
  templateUrl: './account-edit-form.component.html',
  styleUrls: ['./account-edit-form.component.scss']
})
export class AccountEditFormComponent implements OnInit {

  username: string;
  first_name: string;
  last_name: string;
  role: string;
  school: string;
  school_instrument_level: string;

  editForm = new FormGroup({
    // username: new FormControl(),
    // first_name: new FormControl(),
    // last_name: new FormControl(),
    // role: new FormControl(),
    // school: new FormControl(),
    // school_instrument_level: new FormControl()
  })

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    // let dataSource: any = this.route.snapshot.queryParamMap.get('dataSource');
    // console.log(dataSource);

    this.route.queryParams.subscribe(params => {
      let data = params;
      this.username = data.username;
      this.first_name = data.first_name;
      this.last_name = data.last_name;
      this.role = data.role;
      this.school = data.school;
      this.school_instrument_level = data.school_instrument_level;
    })
  }

  edit() {
    // let form = this.formBuilder.group({
    //   username: 'username',
    //   first_name: 'first_name',
    //   last_name: 'last_name',
    //   role: 'role',
    //   school: 'school',
    //   school_instrument_level: 'school_instrument_level'
    // })
    // console.log(form);
  }

}
