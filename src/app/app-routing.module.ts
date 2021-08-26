import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Shared 
import { LoginComponent} from './ui/home/login/login.component';
import { UpdatePasswordComponent } from './ui/home/update_password/update-password/update-password.component';
import { CardsComponent } from './shared/components/cards/cards.component';

import { AccountCreateComponent} from './ui/admin/account-create/account-create.component';
import { AccountEditComponent} from './ui/admin/account-edit/account-edit.component';
import { AccountDeleteComponent } from './ui/admin/account-delete/account-delete.component';
import { FreelanceWageComponent } from './ui/admin/freelance-wage/freelance-wage.component';
import { AdminHomeComponent } from './ui/admin/admin-home/admin-home.component';
// Instructor
import { InstructorHomeComponent } from './ui/instructor/instructor-home/instructor-home.component';
import { AssignmentCreateComponent } from './ui/instructor/assignment-create/assignment-create.component';
import { AssignmentEditComponent } from './ui/instructor/assignment-edit/assignment-edit.component';
import { AssignmentMarkComponent } from './ui/instructor/assignment-mark/assignment-mark.component';
// Student 
import { StudentHomeComponent } from './ui/student/student-home/student-home.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'login',
      pathMatch: 'full',
      component: LoginComponent
    },
    {
      path:'update_password', 
      pathMatch: 'full',
      component: UpdatePasswordComponent
    },
    // Admin
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
      path: 'admin/account/edit',
      pathMatch: 'full',
      component: AccountEditComponent
    },
    {
      path: 'admin/freelance',
      pathMatch: 'full',
      component: FreelanceWageComponent
    },
    // Instructor
    {
      path: 'instructor/home',
      pathMatch: 'full',
      component: InstructorHomeComponent
    },
    {
      path: 'instructor/assignment/create',
      pathMatch: 'full',
      component: AssignmentCreateComponent
    },
    {
      path: 'instructor/assignment/edit',
      pathMatch: 'full',
      component: AssignmentEditComponent
    },
    {
      path: 'instructor/assignment/mark',
      pathMatch: 'full',
      component: AssignmentMarkComponent
    },
    // Student
    {
      path: 'student/home',
      pathMatch: 'full',
      component: StudentHomeComponent
    },
    // Shared 
    {
      path: 'test/cards',
      pathMatch: 'full',
      component: CardsComponent
    },
    // Default 
    {
      path: '**',
      pathMatch: 'full',
      component: LoginComponent
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
