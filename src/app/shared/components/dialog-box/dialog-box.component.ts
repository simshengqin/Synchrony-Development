import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { Account } from '../../../core/models/account';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {

  @Input('actionType') public actionType: any;
  @Input('docid') public docid!: any;
  @Input('username') public username!: any;

  constructor(
    private crudservice:CrudService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  // Modal //
  onOpen(event: any): void {
    console.log(event);
  }

  click_to_delete(){
    console.log("User " + this.username + " has be deleted!")
    this.crudservice.delete("accounts",this.docid)
    this.router.navigate(['/admin/account/delete'])
  }

  click_to_view(){
    console.log("View")
  }
  
  

}
