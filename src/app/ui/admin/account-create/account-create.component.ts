import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {first} from 'rxjs/operators';
import {NgxCsvParser, NgxCSVParserError} from 'ngx-csv-parser';
import {ToastrService} from 'ngx-toastr';
import {CrudService} from '../../../core/services/crud.service';
import {Account} from '../../../../app/core/models/account';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})
export class AccountCreateComponent implements OnInit {

  // @ViewChild(ConfirmModalComponent) confirmModalComponent: ConfirmModalComponent;
  @ViewChild('file') file: ElementRef | undefined;
  csvRecords: any[] = [];
  @ViewChild('fileImportInput', { static: false }) fileImportInput: any;

  constructor(
    private toastrService: ToastrService,
    private ngxCsvParser: NgxCsvParser,
    private crudService: CrudService,
  ) {}
  async ngOnInit(): Promise<void> {
    const singleAccount: Account = await this.crudService.readByDocId('accounts', '7hQyZTken7p6eSAR8MQB')
      .pipe(first())
      .toPromise();
    console.log(singleAccount);

    const allAccounts: Account[] = await this.crudService.read('accounts').pipe(first()).toPromise();
    console.log(allAccounts.sort((a, b) => a.username.localeCompare(b.username)));

    const testAccounts: Account[] = await this.crudService.read('accounts',
      'role', '==', 'student',
      'school', '!=', 'NUS',
    ).pipe(first()).toPromise();
    console.log(testAccounts);

    const testAccounts2: Account[] = await this.crudService.read('accounts',
      'role', '==', 'student',
      'school', '!=', 'NUS',
      'first_name', '==', 'Carecci',
    ).pipe(first()).toPromise();
    console.log(testAccounts2);
    const deleteAccount: Account[] = await this.crudService.read('accounts',
      'username', '==', 'student4'
    ).pipe(first()).toPromise();
    if (deleteAccount.length > 0) {
      await this.crudService.delete('accounts', deleteAccount[0].docId);
    }

  }
  onCloseModal(response: string): void {
    console.log(response);
  }
  async uploadFile(): Promise<void> {
    if (this.file?.nativeElement.files.item(0)) {
      // Parse the file you want to select for the operation along with the configuration
      this.ngxCsvParser.parse(this.file?.nativeElement.files.item(0), {header: true, delimiter: ','})
        .pipe().subscribe(async (result: any) => {
        console.log('Result', result);
        this.csvRecords = result;
        for (const csvRecord of this.csvRecords) {
          const accounts = await this.crudService.read('accounts', 'username', '==', csvRecord.username).pipe(first()).toPromise();
          console.log(accounts);
          const account: Account = {
            username: csvRecord.username,
            role: csvRecord.role,
            school: csvRecord.school,
            school_instrument_level: csvRecord.school_instrument_level,
            first_name: csvRecord.first_name,
            last_name: csvRecord.last_name,
            password: csvRecord.password,
            first_login: true
          };
          if (accounts.length === 0) {
            console.log(account);
            await this.crudService.create('accounts', account); // .then(r => {const ownerDocId = r; } );
          } else {
            await this.crudService.update('accounts', accounts[0].docId, account);
          }
        }
        this.toastrService.success('Uploaded data to database successfully!', '', {positionClass: 'toast-top-center'});
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
        this.toastrService.error('Incorrect file format!', '', {positionClass: 'toast-top-center'});
      });
    } else {
      this.toastrService.error('Please upload a file!', '', {positionClass: 'toast-top-center'});
    }


  }
}
