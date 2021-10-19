import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {first} from 'rxjs/operators';
import {NgxCsvParser, NgxCSVParserError} from 'ngx-csv-parser';
import {ToastrService} from 'ngx-toastr';
import {CrudService} from '../../../core/services/crud.service';
import {Account, Role} from '../../../../app/core/models/account';
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})
export class AccountCreateComponent implements OnInit {

  // @ViewChild(ConfirmModalComponent) confirmModalComponent: ConfirmModalComponent;
  @ViewChild('file') file: ElementRef | undefined;
  accountFile: File;
  csvRecords: any[] = [];
  @ViewChild('fileImportInput', { static: false }) fileImportInput: any;
  errors: string[] = [];
  isUploading = false;

  constructor(
    private toastrService: ToastrService,
    private ngxCsvParser: NgxCsvParser,
    private crudService: CrudService,
    private router: Router,
  ) {}
  async ngOnInit(): Promise<void> {
    const singleAccount: Account = await this.crudService.readByDocId('accounts', '7hQyZTken7p6eSAR8MQB')
      .pipe(first())
      .toPromise();
    // console.log(singleAccount);

    const allAccounts: Account[] = await this.crudService.read('accounts').pipe(first()).toPromise();
    // console.log(allAccounts.sort((a, b) => a.username.localeCompare(b.username)));

    const testAccounts: Account[] = await this.crudService.read('accounts',
      'role', '==', 'student',
      'school', '!=', 'NUS',
    ).pipe(first()).toPromise();
    // console.log(testAccounts);

    const testAccounts2: Account[] = await this.crudService.read('accounts',
      'role', '==', 'student',
      'school', '!=', 'NUS',
      'first_name', '==', 'Carecci',
    ).pipe(first()).toPromise();
    // console.log(testAccounts2);
    const deleteAccount: Account[] = await this.crudService.read('accounts',
      'username', '==', 'student4'
    ).pipe(first()).toPromise();
    if (deleteAccount.length > 0) {
      await this.crudService.delete('accounts', deleteAccount[0].docId);
    }

  }
  onCloseModal(response: string): void {
    // console.log(response);
  }
  async uploadFile(): Promise<void> {
    if (this.accountFile) {
      this.errors = [];
      // column is not found at all
      let missingColumns = ['username',	'role', 'school',	'school_instrument_level', 'first_name',	'last_name',	'password'];
      this.isUploading = true;
      // Parse the file you want to select for the operation along with the configuration
      await this.ngxCsvParser.parse(this.accountFile, {header: true, delimiter: ','})
        .pipe().subscribe(async (result: any) => {
        // console.log('Result', result);
        this.csvRecords = result;
        if (this.csvRecords.length < 2) {
            this.errors.push('Less than 2 rows of data (1 row for column header and 1 row for the actual account data)');
        }
        else {
          for (const [key, value] of Object.entries(this.csvRecords[0])) {
            missingColumns = missingColumns.filter(val => val !== key);
          }
          if (missingColumns.length > 0) {
            this.errors.push('Missing columns headers: ' + Array.from(missingColumns).join(', '));
          }
        }
        if (this.errors.length === 0) {
          let i = 2;
          for (const csvRecord of this.csvRecords) {
            const accounts = await this.crudService.read('accounts', 'username', '==', csvRecord.username).pipe(first()).toPromise();
            // console.log(accounts);
            const account: Account = {
              username: csvRecord.username,
              role: csvRecord.role.toLowerCase(),
              school: csvRecord.school.split(','),
              school_instrument_level: csvRecord.school_instrument_level.toLowerCase().split(','),
              first_name: csvRecord.first_name,
              last_name: csvRecord.last_name,
              password: csvRecord.password,
              first_login: true,
              is_delete: false
            };
            // console.log(account);
            // value in the column is empty even though it is required
            const emptyColumns = [];
            for (const [key, value] of Object.entries(account)) {
              if (value === '' ||
                ((key === 'school' || key === 'school_instrument_level')
                  && account.role !== 'admin' && value.length === 1 && value[0] === '')) {
                emptyColumns.push(key);
              }
            }
            // console.log(emptyColumns);
            if (emptyColumns.length > 0) {
              this.errors.push('Row ' + i + ' has missing values for the following columns: ' + Array.from(emptyColumns).join(', '));
            }
            if (account.role !== Role.invalid &&  !['admin', 'instructor', 'student'].includes(account.role)) {
              this.errors.push('Row ' + i + ' has illegal values for role column (Only admin, instructor or student is accepted)');
            }
            if (account.password.length > 0 && account.password.length < 5) {
              this.errors.push('Row ' + i + ' does not meet the minimum length requirement for password (5)');
            }
            // Stop the creation/updating of ALL accounts as long as there is a problem with 1 of the account
            if (this.errors.length === 0) {
              if (accounts.length === 0) {
                // console.log(account);
                await this.crudService.create('accounts', account); // .then(r => {const ownerDocId = r; } );
              } else {
                await this.crudService.update('accounts', accounts[0].docId, account);
              }
            }
            i++;
          }
          if (this.errors.length === 0) {
            this.toastrService.success('Uploaded data to database successfully!', '', {positionClass: 'toast-top-center'});
            this.router.navigate(['/admin/account/edit']);
          }
          else {
            this.toastrService.error('Errors encountered uploading the file!', '', {positionClass: 'toast-top-center'});
          }
        }
        else {
          this.toastrService.error('Errors encountered uploading the file!', '', {positionClass: 'toast-top-center'});
        }
        this.isUploading = false;
        }, (error: NgxCSVParserError) => {
        // console.log('Error', error);
        this.isUploading = false;
        this.toastrService.error('Incorrect file format!', '', {positionClass: 'toast-top-center'});
      });

    } else {
      this.toastrService.error('Please upload a file!', '', {positionClass: 'toast-top-center'});
    }


  }
}
