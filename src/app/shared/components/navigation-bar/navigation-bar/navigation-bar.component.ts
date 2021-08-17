import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  user_role!:any;
  user_doc_id!:any;
  username!:any;
  
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    this.validate_session();
  }

  validate_session(){
    if(sessionStorage.getItem('role') == null){
      this.user_role = "admin"
      //this.router.navigate(['/login'])
    }
    if(sessionStorage.getItem('doc_id') == null){
      this.user_doc_id = ""
      //this.router.navigate(['/login'])
    }
    if(sessionStorage.getItem('username') == null){
      this.username = ""
      //this.router.navigate(['/login'])
    }
  } 
  // END OF validate_session()

}
