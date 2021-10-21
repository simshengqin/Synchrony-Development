import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Shared
import { LoginComponent} from './ui/home/login/login.component';
import { UpdatePasswordComponent } from './ui/home/update_password/update-password/update-password.component';
import { CardsComponent } from './shared/components/cards/cards.component';

// Admin
import { AccountCreateComponent} from './ui/admin/account-create/account-create.component';
import { AccountEditComponent} from './ui/admin/account-edit/account-edit.component';
import { AccountEditFormComponent } from './ui/admin/account-edit-form/account-edit-form.component';
import { AccountDeleteComponent } from './ui/admin/account-delete/account-delete.component';
import { FreelanceWageComponent } from './ui/admin/freelance-wage/freelance-wage.component';
import { AdminHomeComponent } from './ui/admin/admin-home/admin-home.component';
import { AdminActivityLogComponent } from './ui/admin/admin-activity-log/admin-activity-log.component'
import { AdminActivityLogIndividualComponent } from './ui/admin/admin-activity-log-individual/admin-activity-log-individual.component'
// Instructor
import { InstructorHomeComponent } from './ui/instructor/instructor-home/instructor-home.component';
import { AssignmentCreateComponent } from './ui/instructor/assignment-create/assignment-create.component';
import { AssignmentEditComponent } from './ui/instructor/assignment-edit/assignment-edit.component';
import { AssignmentMarkComponent } from './ui/instructor/assignment-mark/assignment-mark.component';
import { AssignmentEditIndividualComponent } from './ui/instructor/assignment-edit-individual/assignment-edit-individual.component';
// Student
import { StudentHomeComponent } from './ui/student/student-home/student-home.component';
import {AssignmentViewComponent} from "./ui/student/assignment-view/assignment-view.component";
import {AssignmentSubmitIndividualComponent} from "./ui/student/assignment-submit-individual/assignment-submit-individual.component";
import {AssignmentFeedbackIndividualComponent} from "./ui/student/assignment-feedback-individual/assignment-feedback-individual.component";

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
      path: 'admin/account/edit/form',
      pathMatch: 'full',
      component: AccountEditFormComponent
    },
    {
      path: 'admin/freelance',
      pathMatch: 'full',
      component: FreelanceWageComponent
    },
    {
      path: 'admin/activitylog',
      pathMatch: 'full',
      component: AdminActivityLogComponent
    },
    {
      path: 'admin/activitylog/instructor/:key',
      pathMatch: 'full',
      component: AdminActivityLogIndividualComponent
    },
    // Instructor
    {
      path: 'instructor/home',
      pathMatch: 'full',
      component: InstructorHomeComponent
    },
    {
      path: 'instructor/account/create',
      pathMatch: 'full',
      component: AccountCreateComponent
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
      path: 'instructor/assignment/edit/assignment/:docId',
      pathMatch: 'full',
      component: AssignmentEditIndividualComponent
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
    {
      path: 'student/assignment/view',
      pathMatch: 'full',
      component: AssignmentViewComponent
    },
    {
      path: 'student/assignment/submit',
      pathMatch: 'full',
      component: AssignmentSubmitIndividualComponent
    },
    {
      path: 'student/assignment/feedback',
      pathMatch: 'full',
      component: AssignmentFeedbackIndividualComponent
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
