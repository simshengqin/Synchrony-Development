import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountCreateComponent} from './ui/admin/account-create/account-create.component';
import {LoginComponent} from './ui/home/login/login.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'login',
      pathMatch: 'full',
      component: LoginComponent
    },
    {
      path: 'account/create',
      pathMatch: 'full',
      component: AccountCreateComponent
    },
    {
      path: '**',
      pathMatch: 'full',
      component: LoginComponent
    },
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
