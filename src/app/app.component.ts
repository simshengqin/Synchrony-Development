import { Component } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { SharedService } from './core/services/sharedservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Synchrony';
  // constructor(
  //   private crudService:CrudService,
  //   // private router: Router,
  //   // private toastrService: ToastrService
  // ){}
}
