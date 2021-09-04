import { Injectable } from '@angular/core';
import {FirestoreService} from './firestore.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  constructor(
    private fs: FirestoreService
  ) {
  }
  create(collection: string, data: any): Promise<string> {
    return this.fs.add(collection, data);
  }
  update(collection: string, docId: string| undefined, data: any): Promise<void> {
    return this.fs.update(collection + '/' + docId, data);
  }

  delete(collection: string, docId: string | undefined): Promise<void> {
    return this.fs.delete(collection + '/' + docId);
  }
  readByDocId(collection: string, docId: string| undefined): Observable<any> {
    return this.fs.doc$(collection + '/' + docId);
  }
  read(collection: string, filterName1: string = '', filterOp1: any = '', filterValue1: any = '',
       filterName2: string = '', filterOp2: any = '', filterValue2: any = '',
       filterName3: string = '', filterOp3: any = '', filterValue3: any = '',
       filterName4: string = '', filterOp4: any = '', filterValue4: any = '',
       sortColumn = '', isAsc = false): Observable<any[]> {
    // Cannot use === as filterValue1 etc can be a number
    // tslint:disable-next-line:triple-equals
    // console.log(filterValue1 + ',' + filterValue2 + ',' + filterValue3 + ',' + filterValue4 + ',');
    // tslint:disable-next-line:triple-equals
    if (filterValue1 == '' && filterValue2 == '' && filterValue3 == '' && filterValue4 == '') {
      return this.fs.col$(collection, ref => {
        return ref;
        // .orderBy('createdDatetime', 'desc');
      });
    }
    // @ts-ignore
    return this.fs.col$(collection, ref => {
      let result;
      if (filterValue1 !== '') {result = ref.where(filterName1, filterOp1, filterValue1); }
      // else if (filterValue2 !== '') {result = ref.where(filterName2, filterOp2, filterValue2); }
      // else if (filterValue3 !== '') {result = ref.where(filterName3, filterOp3, filterValue3); }
      // else if (filterValue4 !== '') {result = ref.where(filterName4, filterOp4, filterValue4); }
      for (let i = 2; i <= 4; i++) {
        switch (i) {
          // case 1:
          //   if (filterValue1 !== '') {
          //     console.log('First filter op only');
          //     result = result?.where(filterName1, filterOp1, filterValue1); }
          //   break;
          case 2:
            if (filterValue2 !== '') {
              result = result?.where(filterName2, filterOp2, filterValue2); }
            break;
          case 3:
            if (filterValue3 !== '') {result = result?.where(filterName3, filterOp3, filterValue3); }
            break;
          case 4:
            if (filterValue4 !== '') {result = result?.where(filterName4, filterOp4, filterValue4); }
            break;
        }
      }
      return result; // ?.orderBy('school', 'asc');
    });
  }

}
