import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SharedService {

  //private parameter; // parameter will contain values to be pass between URL or Componets.
  //private account!:any; // save account details when user login.

  setComponentParameter(parameter) {
    //this.parameter = parameter;
    sessionStorage.setItem('parameter', JSON.stringify(parameter));
  }

  getComponentParameter() {
    //return this.parameter;
    return JSON.parse(sessionStorage.getItem("parameter"));
  }

  setAccount(account:any){
    //this.account = JSON.stringify(account)
    sessionStorage.setItem('account', JSON.stringify(account));
  }

  getAccount(){
    //return JSON.parse(this.account)
    return JSON.parse(sessionStorage.getItem("account"));
  }

  reset(){
    //this.account = null;
    //this.parameter = "";
    sessionStorage.clear()
  }

}