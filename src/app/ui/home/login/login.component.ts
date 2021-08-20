import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
//import { Account } from 'src/app/core/models/account';
import { CrudService } from 'src/app/core/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isSubmitClicked = false;
  isValidUsernamePasswordCombi = true;
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
    // Validate account and password
    this.crudservice.read("accounts","username","==",this.loginForm.value.username,"password","==",this.loginForm.value.password).subscribe(async (account:any) => {
      if(account==null||account==undefined){
        console.log("No such user")
      } else {
        sessionStorage.setItem('role', account[0].role);
        this.router.navigate(['/account/delete'])
      }
    })
    // End of vidation 


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
