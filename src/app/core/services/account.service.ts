import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Account } from '../models/account'
import { first, map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private dbPath = '/accounts';
  accountsRef!: AngularFirestoreCollection<Account>;

  constructor(private db:AngularFirestore) { 
    this.accountsRef = db.collection(this.dbPath);
  }

  getAllAccounts(): AngularFirestoreCollection<Account> {
    return this.accountsRef;
  }

  login_validation(username: string, password:string): Observable<Account> {
    return this.db.collection<Account>("accounts", ref => 
      ref.where('username', '==', username).where('password', '==', password).limit(1)).valueChanges().pipe(
        map(account => account[0])
      );
  } 


  // OLD // 
  getAccountByCollection(email: string): Observable<Account> {
    return this.db.collection<Account>("accounts", ref => ref.where('email', '==', email).limit(1))
    .valueChanges()
    .pipe(
      map(account => account[0]) // flatten the result
    );
  } 

  getAccountByCollectionByDocID(docid: string): any {
    return this.db.collection<Account>("accounts", ref => ref.where('docid', '==', docid).limit(1))
    .valueChanges()
    .pipe(
      map(account => account[0]) // flatten the result
    );
  } 

  create(data :any): Promise<void> {
    return this.accountsRef.doc(data.docid).set({...data});
  }

  update(id: string, data: any): any {
    //return this.accountsRef.doc(id).update({...data});
    return this.accountsRef.doc(id).update({...data});
  }


  delete(id: string): Promise<void> { 
    return this.accountsRef.doc(id).delete();
  }


}
