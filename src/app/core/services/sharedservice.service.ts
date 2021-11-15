import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SharedService {


  setComponentParameter(parameter) {
    sessionStorage.setItem('parameter', JSON.stringify(parameter));
  }

  getComponentParameter() {
    return JSON.parse(sessionStorage.getItem("parameter"));
  }

  setAccount(account:any){
    sessionStorage.setItem('account', JSON.stringify(account));
  }

  getAccount(){
    return JSON.parse(sessionStorage.getItem("account"));
  }

  reset(){
    sessionStorage.clear()
  }

}