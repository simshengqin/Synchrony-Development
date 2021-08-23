import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent} from './ui/home/login/login.component';
import { UpdatePasswordComponent } from './ui/home/update_password/update-password/update-password.component';
import { CardsComponent } from './shared/components/cards/cards/cards.component';

import { AccountCreateComponent} from './ui/admin/account-create/account-create.component';
import { AccountDeleteComponent } from './ui/admin/account-delete/account-delete.component';
import { FreelanceWageComponent } from './ui/admin/freelance-wage/freelance-wage.component';
import { AdminHomeComponent } from './ui/admin/admin-home/admin-home.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path:'update_password',
      pathMatch: 'full',
      component: UpdatePasswordComponent
    },
    {
      path: 'login',
      pathMatch: 'full',
      component: LoginComponent
    },
    {
      path: 'admin/home',
      pathMatch: 'full',
      component: AdminHomeComponent
    },
    {
      path: 'admin/account/create',
      pathMatch: 'full',
      component: AccountCreateComponent
    },
    {
      path: 'admin/account/delete',
      pathMatch: 'full',
      component: AccountDeleteComponent
    },
    {
      path: 'admin/freelance',
      pathMatch: 'full',
      component: FreelanceWageComponent
    },
    {
      path: 'test/cards',
      pathMatch: 'full',
      component: CardsComponent
    },
    {
      path: '**',
      pathMatch: 'full',
      component: AdminHomeComponent
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
