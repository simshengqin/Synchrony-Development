import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountCreateComponent} from './ui/admin/account-create/account-create.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'account/create',
      pathMatch: 'full',
      component: AccountCreateComponent
    },
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
