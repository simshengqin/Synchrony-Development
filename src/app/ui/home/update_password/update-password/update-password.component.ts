import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CrudService } from 'src/app/core/services/crud.service';
import { Router } from '@angular/router';
import { ValidatorFn } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormGroupDirective } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import * as bcrypt from 'bcryptjs';
import { SharedService } from 'src/app/core/services/sharedservice.service';

@Component({
  selector: 'app-update-password',
  templateUrl: '../../login/login.component.html',
  styleUrls: ['../../login/login.component.scss']
})
export class UpdatePasswordComponent implements OnInit {

  loginPage = false;
  updatePasswordPage = true;
  loginForm!: FormGroup;
  isSubmitClicked = false;
  isValidUsernamePasswordCombi = true;
  passwordMatch = false;
  role!: String;
  matcher = new MyErrorStateMatcher();
  account: any;
  firstTime = true;
  sessionAccount: any;

  constructor(
    private fb: FormBuilder,
    private crudservice: CrudService,
    private router:Router,
    private toastr:ToastrService,
    private sharedservice:SharedService
    ) { }

  ngOnInit(): void {

    // The user can only enter this page if he or she has logged in before. All logged in accounts are stored in sessions
    this.sessionAccount = JSON.parse(this.sharedservice.getAccount());
    
    // If no session exists, then reroute the user back to the login page 
    if(this.sessionAccount.username == null){
      this.router.navigate(["/login"]);
    }

    // Initialize formbuilder
    this.initForm();
  }

  initForm(): void{
    this.loginForm = this.fb.group({
      username:["",Validators.required],
      password:["",Validators.required],
      newPassword:["",[Validators.required,Validators.minLength(5)]],
      confirmPassword:["",Validators.required]
    }, { validators: this.checkPasswords });
  }

  // Retrieve username
  get username(): FormControl{
    return this.loginForm.get('username') as FormControl;
  }

  // Retrieve password
  get password(): FormControl{
    return this.loginForm.get('password') as FormControl;
  }

  get newPassword(): FormControl{
    return this.loginForm.get('newPassword') as FormControl;
  }

  get confirmPassword(): FormControl{
    return this.loginForm.get('confirmPassword') as FormControl;
  }

  // Custom Validator for password matching
  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let pass = group.get('newPassword')!.value;
    let confirmPass = group.get('confirmPassword')!.value
    return pass === confirmPass ? null : { notSame: true }
  }

  onSubmit(){

     // Submit was clicked. Form validation will take place
     this.isSubmitClicked = true;

     // Validate account and password match
    if (this.loginForm.valid) {
      // Form validation complete. Update password

      // Login Validation only happens once
      if (this.firstTime){
        this.firstTime = false;
        // Validate login
        this.crudservice.read("accounts","username","==",this.loginForm.value.username).pipe(first()).subscribe(async (account:any) => {

        if (account.length==0 || !bcrypt.compareSync(this.loginForm.value.password, account[0].password)){
          // username and password does not exist on the database or password fails
          this.isValidUsernamePasswordCombi = false;

          // Next, validate if password matches
        } else {
          // Login is successful
          this.isValidUsernamePasswordCombi = true;
          this.account = account[0];

          if (account[0].is_delete){
            this.error("Account has been deactivated","Account has been deactivated. Please seek the admin to reset your account")
            this.router.navigate(["/login"]);
            return;
          }

          // Update password
          // Hashing password
          this.account.password = bcrypt.hashSync(this.loginForm.value.newPassword, 10);
          this.account.first_login = false;
          this.crudservice.update("accounts",this.account.docId, this.account);
          this.success("Update successful!","Update successful! Please login again")
          this.router.navigate(["/login"]);
          return;
        }
      })
    } else {
      this.isValidUsernamePasswordCombi = false;
      }
    }
  }

  notify(title:string,message:string) {
    title = "Notification"
    message = "<h4>" + message + "</h4> <p> please click here to close </p>"
    this.toastr.info(message,title,{
      easeTime: 0,
      positionClass: 'toast-top-full-width',
      enableHtml: true,
      closeButton: true,
      timeOut: 0,
      disableTimeOut: true,
    });
  }

  error(title:string,message:string) {
    message = "<h4>" + message + "</h4>"
    this.toastr.error(message,title,{
      easeTime: 0,
      positionClass: 'toast-top-full-width',
      enableHtml: true,
      closeButton: true,
    });
  }

  success(title:string,message:string) {
    message = "<h4>" + message + "</h4>"
    this.toastr.success(message,title,{
      easeTime: 0,
      positionClass: 'toast-top-full-width',
      enableHtml: true,
      closeButton: true,
    });
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control?.invalid && control?.parent?.dirty);
    const invalidParent = !!(control?.parent?.invalid && control?.parent?.dirty);

    return invalidCtrl || invalidParent;
  }
}
