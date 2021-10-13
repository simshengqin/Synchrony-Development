import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/core/services/crud.service';
import { Router } from "@angular/router";
import { first } from 'rxjs/operators';
import {ToastrService} from "ngx-toastr";

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
  ){}

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      let data = params;
      this.docId = data.docId;
      this.username = data.username;
      this.first_name = data.first_name;
      this.last_name = data.last_name;
      this.role = data.role;
      this.school = data.school;
      this.school_instrument_level = data.school_instrument_level
      this.selectedItem = data.role;
    })
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
    let firstName = this.editForm.value.first_name;
    let lastName = this.editForm.value.last_name;
    let role = this.editForm.value.role;
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

      if(role!='') {
        this.crudservice.update("accounts", this.docId, {"role": role});
      }


      if(school!='') {
        if(school.match(/,/g)) {
          let delimit = school.split(",");
          this.crudservice.update("accounts", this.docId, {"school": delimit});
        } else {
          let arr = [];
          arr.push(school);
          this.crudservice.update("accounts", this.docId, {"school": arr});
        }
      }

      if(schoolInstrumentLevel!='') {
        for(let i=0; i<schoolInstrumentLevel.length; i++) {
          // check for number of _
          if (schoolInstrumentLevel[i].match(/_/g).length == 2) {
            // check if the entry follows the sch_inst_lvl format!
            this.crudservice.update("accounts", this.docId, {"school_instrument_level": schoolInstrumentLevel});
          }
        }
      }
      this.toastrService.success('Updated account details successfully!', '', {positionClass: 'toast-top-center'});
      this.router.navigate(['/admin/account/edit']);

    } catch(e) {
      // console.log(e);
    }
  }

}
