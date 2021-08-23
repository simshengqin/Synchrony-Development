import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountCreateComponent} from './ui/admin/account-create/account-create.component';
import { AccountDeleteComponent } from './ui/admin/account-delete/account-delete.component';
import {LoginComponent} from './ui/home/login/login.component';
import { CardsComponent } from './shared/components/cards/cards/cards.component';


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
      path: 'account/delete',
      pathMatch: 'full',
      component: AccountDeleteComponent
    },
    {
      path: '**',
      pathMatch: 'full',
      component: LoginComponent
    },
    {
      path: 'test/cards',
      pathMatch: 'full',
      component: CardsComponent
    },
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
