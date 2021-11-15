import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/core/services/crud.service';
import { Router } from "@angular/router";
import { first } from 'rxjs/operators';
import { ToastrService } from "ngx-toastr";
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

  actionType:string = "accountEdit";
  show = false;

  security_role_access: string = "admin";

  constructor(
    private crudservice: CrudService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private sharedService:SharedService
  ){}

  async ngOnInit() {
    var accountDetail = JSON.parse(this.sharedService.getAccount()!);
    if(this.security_role_access != accountDetail.role){
      this.router.navigate(['/login']);
      this.toastrService.error('Access denied invalid user access detect!', '', {positionClass: 'toast-top-center'});
    }
    var doc = this.sharedService.getComponentParameter()
    const data = await this.crudservice.readByDocId('accounts',doc).pipe(first()).toPromise();
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


  async edit() {

    let firstName = this.editForm.value.first_name;
    let lastName = this.editForm.value.last_name;
    let school = this.editForm.value.school;
    let schoolInstrumentLevel = this.editForm.value.school_instrument_level;

    try {
      // username shouldnt be allowed to be editable!!

      if(firstName!='') {
        this.crudservice.update("accounts", this.docId, {"first_name": firstName});
      }

      if(lastName!='') {
        this.crudservice.update("accounts", this.docId, {"last_name": lastName});
      }


      if(school!='' || school!=[]) {
        if(Array.isArray(school) == false) {
          let arr = school.split(",");
          this.crudservice.update("accounts", this.docId, {"school": arr});
        }
      } else {
        this.toastrService.error("Error: School cannot be empty!", '', {positionClass: 'toast-top-center'});
        return;
      }

      if(schoolInstrumentLevel!='' || schoolInstrumentLevel!=[]) {
        if(Array.isArray(schoolInstrumentLevel) == false) {
          let arr = schoolInstrumentLevel.split(",");
          schoolInstrumentLevel = arr;
        }

        let result = [];

        for(let i=0; i<schoolInstrumentLevel.length; i++) {
          // check for number of _
          if (schoolInstrumentLevel[i].match(/_/g).length == 2) {
            // check if the entry follows the sch_inst_lvl format!

            if (schoolInstrumentLevel[i][0] != "_" && schoolInstrumentLevel[i].slice(-1) != "_") {
              // make all lowercase alphabet
              result.push(schoolInstrumentLevel[i].toLowerCase());
            } else {
              this.toastrService.error("Error: Check the format of School-Instrument-Level!", '', {positionClass: 'toast-top-center'});
              return;
            }
          } else {
            this.toastrService.error("Error: Number of underscores in School-Instrument-Level is higher or lower than 2!", '', {positionClass: 'toast-top-center'});
            return;
          }
        }
        this.crudservice.update("accounts", this.docId, {"school_instrument_level": result});
      } else {
        this.toastrService.error("Error: School-Instrument-Level cannot be empty!", '', {positionClass: 'toast-top-center'});
        return;
      }

      this.toastrService.success('Updated account details successfully!', '', {positionClass: 'toast-top-center'});
      this.router.navigate(['/admin/account/edit']);

    } catch(e) {
      this.toastrService.error("Error! Please contact the system administrator", '', {positionClass: 'toast-top-center'});
    }
  }

}
