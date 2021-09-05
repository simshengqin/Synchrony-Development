import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

// Firebase, Firestore
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Angular Material Components
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
// MDB / NGD Bootstrap
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Shared Components
import { HeaderComponent} from './shared/components/header/header.component';
import { CardsComponent } from './shared/components/cards/cards.component';
import { UpdatePasswordComponent } from './ui/home/update_password/update-password/update-password.component';
import { LoginComponent } from './ui/home/login/login.component';
// Admin's Components
import { AccountCreateComponent} from './ui/admin/account-create/account-create.component';
import { AccountDeleteComponent } from './ui/admin/account-delete/account-delete.component';
import { AdminHomeComponent } from './ui/admin/admin-home/admin-home.component';
import { FreelanceWageComponent } from './ui/admin/freelance-wage/freelance-wage.component';
// Form modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule} from 'ngx-toastr';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { InstructorHomeComponent } from './ui/instructor/instructor-home/instructor-home.component';
import { AssignmentCreateComponent } from './ui/instructor/assignment-create/assignment-create.component';
import { AssignmentEditComponent } from './ui/instructor/assignment-edit/assignment-edit.component';
import { AssignmentMarkComponent } from './ui/instructor/assignment-mark/assignment-mark.component';
import { StudentHomeComponent } from './ui/student/student-home/student-home.component';
import { TableComponent } from './shared/components/table/table.component';
import { InputDropdownSelectComponent } from './shared/components/input-dropdown-select/input-dropdown-select.component';
import { AccountEditComponent } from './ui/admin/account-edit/account-edit.component';
import { MatNativeDateModule } from '@angular/material/core';
import { InputSelectComponent } from './shared/components/input-select/input-select.component';
import {AssignmentMarkIndividualComponent} from './ui/instructor/assignment-mark-individual/assignment-mark-individual.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import {VideojsRecordComponent} from './shared/components/videojs-record/videojs-record.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AngularFireStorage } from '@angular/fire/storage';
import {AssignmentViewComponent} from './ui/student/assignment-view/assignment-view.component';
import {TranslateModule} from '@ngx-translate/core';
import {AssignmentSubmitIndividualComponent} from './ui/student/assignment-submit-individual/assignment-submit-individual.component';
import {AssignmentFeedbackIndividualComponent} from './ui/student/assignment-feedback-individual/assignment-feedback-individual.component';
// import {ConfirmModalComponent} from './shared/components/confirm-modal/confirm-modal.component';
// import {VideoPlayerComponent} from './shared/components/video-player/video-player.component';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import { DialogBoxComponent } from './shared/components/dialog-box/dialog-box.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountCreateComponent,
    CardsComponent,
    LoginComponent,
    AccountDeleteComponent,
    UpdatePasswordComponent,
    AdminHomeComponent,
    FreelanceWageComponent,
    InstructorHomeComponent,
    AssignmentCreateComponent,
    AssignmentEditComponent,
    AssignmentMarkComponent,
    AssignmentMarkIndividualComponent,
    StudentHomeComponent,
    TableComponent,
    InputDropdownSelectComponent,
    AccountEditComponent,
    InputSelectComponent,
    VideojsRecordComponent,
    AssignmentViewComponent,
    AssignmentSubmitIndividualComponent,
    AssignmentFeedbackIndividualComponent,
    DialogBoxComponent,
    // ConfirmModalComponent,
    // VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDropzoneModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'Synchrony'),
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features
    AngularFireStorageModule,  // Only required for storage features
    MDBBootstrapModule.forRoot(), // MDBootstrap
    NgbModule, // Bootstrap
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 3500,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    NgxCsvParserModule,
    FlexLayoutModule,
    NgxExtendedPdfViewerModule,
    TranslateModule.forRoot(),
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
