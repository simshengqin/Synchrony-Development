import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Account } from 'src/app/core/models/account';
import { CrudService } from 'src/app/core/services/crud.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

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
    private router:Router
    ) { }

  ngOnInit(): void {
    // Initialize formbuilder
    this.initForm();
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
      this.crudservice.read("accounts","username","==",this.loginForm.value.username,"password","==",this.loginForm.value.password).pipe(first()).subscribe(async (account:any) => {
        console.log(account);

        if (account.length==0){
          // username and password does not exist on the database
          console.log("Login denied");
          this.isValidUsernamePasswordCombi = false;
        } else {
          // Login is successful
          console.log("Login successful");

          // Remove password from object
          delete account[0].password;

          // Store account details as session
          console.log(account[0]);
          //sessionStorage.setItem('account',account[0]);
          sessionStorage.setItem('account', JSON.stringify(account[0]));
          // Check if user has logged in for the first time. If so, redirect to update password
          if (account[0].first_login){
            // If user has logged in for the first time, redirect to update password page
            alert("You have logged in for the first time. You will be redirected to change your password");
            this.router.navigate(["/update_password"]);
          } else {
            // If user has logged in before, direct to web page based on role
            this.role = account[0].role;
            console.log(this.role);

            if (this.role=="instructor"){
                // Redirect to instructor page
                console.log("teacher's page");
                this.router.navigate(["instructor/home"]);
              } else if (this.role == "student"){
                // Redirect to student page
                console.log("student's page")
                this.router.navigate(["student/assignment/view"]);
              } else if (this.role == "admin"){
                console.log("admin page");
                this.router.navigate(["admin/home"]);
            }
          }
        }
      })
    }
  }
}
