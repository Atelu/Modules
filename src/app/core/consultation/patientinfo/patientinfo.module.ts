import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientinfoComponent} from './patientinfo.component';
import {VitalsignsComponent} from './tabs/vitalsigns/vitalsigns.component';
import {LastvisitinfoComponent} from './tabs/lastvisitinfo/lastvisitinfo.component';
import {FlexLayoutModule} from '@angular/flex-layout';

import {
  MatFormFieldModule, MatCardModule, MatCheckboxModule, MatTooltipModule,
  MatInputModule, MatButtonModule,
  MatDialogModule, MatToolbarModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatPaginatorModule, MatSortModule, MatIconModule, MatTabsModule,
  MatSnackBarModule, MatRadioModule, MatDatepickerModule, MatListModule,
  MatNativeDateModule, MatSelectModule, MatTableModule, MatMenuModule, MatSidenavModule
} from '@angular/material/';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClinicalhistoryComponent} from './tabs/clinicalhistory/clinicalhistory.component';
import {ExistingmedicalconditionComponent} from './tabs/existingmedicalcondition/existingmedicalcondition.component';


@NgModule({declarations: [PatientinfoComponent, VitalsignsComponent, LastvisitinfoComponent, ClinicalhistoryComponent, ExistingmedicalconditionComponent],
  exports: [
    PatientinfoComponent
  ],
  imports: [
    CommonModule, MatFormFieldModule, MatCardModule, MatCheckboxModule, MatTooltipModule,
    MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule, FlexLayoutModule,
    MatDialogModule, MatToolbarModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatPaginatorModule, MatSortModule, MatIconModule, MatTabsModule,
    MatSnackBarModule, MatRadioModule, MatDatepickerModule, MatListModule,
    MatNativeDateModule, MatSelectModule, MatTableModule, MatMenuModule, MatSidenavModule
  ]
})
export class PatientinfoModule {
}
