import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isSubmitClicked = false;
  isValidUsernamePasswordCombi = true;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Initialize formbuilder
    this.initForm();
  }

  initForm(): void{
    this.loginForm = this.fb.group({
      username:["",Validators.required],
      password:["",Validators.required]
    })
    console.log(this.loginForm);
  }

  // Retrieve username
  get username(): FormControl{
    return this.loginForm.get('username') as FormControl;
  }

  // Retrieve password
  get password(): FormControl{
    return this.loginForm.get('password') as FormControl;
  }

  checkUsernamePasswordCombi(): void{
    // Ping Database to see if passwords and username matches

    // Dummy test
    // this.isValidUsernamePasswordCombi = this.username.value == 'user' && this.password.value == '1';
    // if (this.isValidUsernamePasswordCombi) { alert('Login successful!')}
  }
  onSubmit(){
    this.isSubmitClicked = true;
    if (this.loginForm.valid) {
      this.checkUsernamePasswordCombi();
    }
    console.log(this.loginForm);
    console.log(this.username.hasError('usernameInvalid'));
    console.log(this.username);
    // console.log("Working!!");
    // console.log("Username: ", this.username?.value);
    // console.log("Password:", this.password);
  }

}
