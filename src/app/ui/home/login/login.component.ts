import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Account } from 'src/app/core/models/account';
import { AccountService } from 'src/app/core/services/account.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username!:string;
  password!:string; 

  constructor(
    private accountservice:AccountService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  submitForm(){
    this.accountservice.login_validation(this.username,this.password).pipe(first()).subscribe(async(account: Account) => {
      if(account==null||account==undefined){
        console.log("no such user!")
      } else {
        console.log(account)
        console.log("Hello " + account);
        sessionStorage.setItem('role', account.role);
        console.log(account.role)
        this.router.navigate(['/account/create'])
      }
    })
  }

}
