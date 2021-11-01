import { Component, OnInit , ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Account } from 'src/app/core/models/account';
import { CrudService } from 'src/app/core/services/crud.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import * as bcrypt from 'bcryptjs';
import { SharedService } from 'src/app/core/services/sharedservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Variables only for update password page that are not applicable here
  updatePasswordPage = false;
  passwordMatch = true;

  loginPage = true;
  loginForm!: FormGroup;
  isSubmitClicked = false;
  isValidUsernamePasswordCombi = true;
  role!: String;

  constructor(
    private fb: FormBuilder,
    private crudservice: CrudService,
    private router:Router,
    private toastr:ToastrService,
    private sharedservice:SharedService
    ) { }

  ngOnInit(): void {
    // Initialize formbuilder
    this.initForm();
    // sessionStorage.clear()
    this.sharedservice.reset()
    // console.log(this.sharedservice.getAccount())
    // console.log(this.sharedservice.getComponentParameter())
  }

  initForm(): void{
    this.loginForm = this.fb.group({
      username:["",Validators.required],
      password:["",Validators.required],
      //Added to avoid error
      newPassword:[""]
    })
    // console.log(this.loginForm);
  }

  // Retrieve username
  get username(): FormControl{
    return this.loginForm.get('username') as FormControl;
  }

  //Added to avoid error
  get newPassword():FormControl{
    return this.loginForm.get('newPassword') as FormControl;
  }

  // Retrieve password
  get password(): FormControl{
    return this.loginForm.get('password') as FormControl;
  }

  // Functions

  onSubmit(){

    // Submit was clicked. Form validation will take place
    this.isSubmitClicked = true;

    // Validate account and password
    if (this.loginForm.valid) {

      // Calling firebase service
      this.crudservice.read("accounts","username","==",this.loginForm.value.username).pipe(first()).subscribe(async (account:any) => {
        // console.log(account);

        if (account.length==0){
          // username and password does not exist on the database
          this.isValidUsernamePasswordCombi = false;

        } else if (!bcrypt.compareSync(this.loginForm.value.password, account[0].password)) {
          // username does exist on the database, but password validation fails
          // add to counter for failed password attempts 
          this.isValidUsernamePasswordCombi = false;
          account[0].login_fail_count += 1;

          if (account[0].login_fail_count == 5){
            // If account fails password validation 5 times, then it is suspended 
            account[0].is_delete = true;
            this.crudservice.update("accounts",account[0].docId, account[0]); 
          } else if (account[0].login_fail_count < 5){
            // else, add update to the database to up the login failure count
            this.crudservice.update("accounts",account[0].docId, account[0]); 
          }

          // Check if account has been deleted 
          if (account[0].is_delete){
            this.error("Account has been suspended","Your account has been suspended. Please seek the admin to reset your account")
          } 
          
        } else {
          // Login is successful
          // Reset login fail counter 
          account[0].login_fail_count = 0;
          this.crudservice.update("accounts",account[0].docId, account[0]); 

          // Remove password from object
          delete account[0].password;

          // Store account details as session
          //sessionStorage.setItem('account', JSON.stringify(account[0]));
          this.sharedservice.setAccount(JSON.stringify(account[0]));
          console.log(JSON.parse(this.sharedservice.getAccount()))

          // Check if account has been deleted 
          if (account[0].is_delete){
            this.error("Account has been suspended","Your account has been suspended. Please seek the admin to reset your account")
            return;
          }

          // Check if user has logged in for the first time. If so, redirect to update password
          if (account[0].first_login){
            // If user has logged in for the first time, redirect to update password page
            
            this.notify("Update Password", "You have logged in for the first time. You are required to change your password.")
            this.router.navigate(["/update_password"]);
          } else {
            // If user has logged in before, direct to web page based on role
            this.role = account[0].role;

            if (this.role=="instructor"){
                // Redirect to instructor page
            
                this.router.navigate(["instructor/home"]);
              } else if (this.role == "student"){
                // Redirect to student page
                // console.log("student's page")
                this.router.navigate(["student/assignment/view"]);
              } else if (this.role == "admin"){
                // console.log("admin page");
                this.router.navigate(["admin/home"]);
            }
          }
        }
      })
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

}



