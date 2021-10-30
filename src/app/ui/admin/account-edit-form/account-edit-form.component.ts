import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/core/services/crud.service';
import { Router } from "@angular/router";
import { first } from 'rxjs/operators';
import {ToastrService} from "ngx-toastr";
import { SharedService } from 'src/app/core/services/sharedservice.service';

@Component({
  selector: 'app-account-edit-form',
  templateUrl: './account-edit-form.component.html',
  styleUrls: ['./account-edit-form.component.scss']
})
export class AccountEditFormComponent implements OnInit {

  docId: string;
  username: string;
  first_name: string;
  last_name: string;
  role: string;
  school: string;
  school_instrument_level: string;
  selectedItem: string;

  editForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private crudservice: CrudService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private sharedService:SharedService
  ){}

  async ngOnInit() {
    var docid = this.sharedService.getComponentParameter()
    const data = await this.crudservice.readByDocId('accounts',docid).pipe(first()).toPromise();
    this.docId = data.docId;
    this.username = data.username;
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.role = data.role;
    this.school = data.school;
    this.school_instrument_level = data.school_instrument_level
    this.selectedItem = data.role;
    this.initForm();
  }

  initForm(): void {
    this.editForm = this.formBuilder.group({
      username:[""],
      first_name:[""],
      last_name: [""],
      role: [""],
      school: [""],
      school_instrument_level: [""]
    });
  }

  // get new_username(): FormControl{
  //   return this.editForm.get('username') as FormControl;
  // }

  // get new_first_name(): FormControl{
  //   return this.editForm.get('first_name') as FormControl;
  // }

  // get new_last_name(): FormControl{
  //   return this.editForm.get('last_name') as FormControl;
  // }

  // get new_role(): FormControl{
  //   return this.editForm.get('role') as FormControl;
  // }

  // get new_school(): FormControl{
  //   return this.editForm.get('school') as FormControl;
  // }

  // get new_school_instrument_level(): FormControl{
  //   return this.editForm.get('school_instrument_level') as FormControl;
  // }

  async edit() {
    // let username = this.editForm.value.username;

    // console.log(this.editForm.value);

    let firstName = this.editForm.value.first_name;
    let lastName = this.editForm.value.last_name;
    // let role = this.editForm.value.role;
    let school = this.editForm.value.school;
    let schoolInstrumentLevel = this.editForm.value.school_instrument_level;

    try {
      // username shouldnt be allowed to be editable!!
      // if(username!='') {
      //   this.crudservice.update("accounts", this.docId, {"username": username});
      // }

      if(firstName!='') {
        this.crudservice.update("accounts", this.docId, {"first_name": firstName});
      }

      if(lastName!='') {
        this.crudservice.update("accounts", this.docId, {"last_name": lastName});
      }

      // if(role!='') {
      //   this.crudservice.update("accounts", this.docId, {"role": role});
      // }

      if(school!='') {
        if(Array.isArray(school) != true) {
          let arr = school.split(",");
          this.crudservice.update("accounts", this.docId, {"school": arr});
        }
      }

      if(schoolInstrumentLevel!='') {
        if(Array.isArray(schoolInstrumentLevel) != true) {
          let arr = schoolInstrumentLevel.split(",");
          schoolInstrumentLevel = arr;
        }

        let result = [];

        for(let i=0; i<schoolInstrumentLevel.length; i++) {
          // check for number of _
          if (schoolInstrumentLevel[i].match(/_/g).length == 2) {
            // check if the entry follows the sch_inst_lvl format!
            // make all lowercase alphabet
            result.push(schoolInstrumentLevel[i].toLowerCase());
          } else {
            console.log("Error: Number of underscores is higher or lower than 2!");
          }
        }
        this.crudservice.update("accounts", this.docId, {"school_instrument_level": result});
      }
      this.toastrService.success('Updated account details successfully!', '', {positionClass: 'toast-top-center'});
      this.router.navigate(['/admin/account/edit']);

    } catch(e) {
      console.log(e);
    }
  }

}
