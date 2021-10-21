import { Component, OnInit , ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Account } from 'src/app/core/models/account';
import { CrudService } from 'src/app/core/services/crud.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import * as bcrypt from 'bcryptjs';


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
    private toastr:ToastrService
    ) { }

  ngOnInit(): void {
    // Initialize formbuilder
    this.initForm();
    sessionStorage.clear()
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

        if (account.length==0 || !bcrypt.compareSync(this.loginForm.value.password, account[0].password)){
          // username and password does not exist on the database
          this.isValidUsernamePasswordCombi = false;

        } else {
          // Login is successful

          // Remove password from object
          delete account[0].password;

          // Store account details as session
          sessionStorage.setItem('account', JSON.stringify(account[0]));

          // Check if account has been deleted 
          if (account[0].is_delete){
            this.error("Account has been deactivated","Account has been deactivated. Please seek the admin to reset your account")
            return;
          }

          // Check if user has logged in for the first time. If so, redirect to update password
          if (account[0].first_login){
            // If user has logged in for the first time, redirect to update password page
            
            this.notify("logged in for the first time", "You have logged in for the first time. You are required to change your password.")
            console.log("Test the button!")
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
    message = "<h2>" + message + "</h2> <p> please click here to close </p>"
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
    message = "<h1>" + message + "</h1>" 
    this.toastr.error(message,title,{
      easeTime: 0,
      positionClass: 'toast-top-full-width',
      enableHtml: true,
      closeButton: true,
    });
  }

}



