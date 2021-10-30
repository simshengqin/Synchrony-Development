import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {

  private parameter; // parameter will contain values to be pass between URL or Componets.
  private account!:any; // save account details when user login.

  setComponentParameter(parameter) {
    this.parameter = parameter;
  }

  getComponentParameter() {
    return this.parameter;
  }

  setAccount(account:any){
    this.account = JSON.stringify(account)
  }

  getAccount(){
    return JSON.parse(this.account)
  }

  reset(){
    this.account = null;
    this.parameter = "";
  }

}