import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConsultationComponent} from './consultation.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatFormFieldModule, MatCardModule,  MatCheckboxModule,  MatTooltipModule,
  MatInputModule, MatButtonModule,
  MatDialogModule, MatToolbarModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatPaginatorModule, MatSortModule, MatIconModule, MatTabsModule,
  MatSnackBarModule, MatRadioModule, MatDatepickerModule, MatListModule,
  MatNativeDateModule, MatSelectModule, MatTableModule, MatMenuModule, MatSidenavModule
} from '@angular/material/';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtontopComponent } from './components/buttontop/buttontop.component';
import { ConsultationformComponent } from './components/consultationform/consultationform.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { PatientlistComponent } from './components/patientlist/patientlist.component';
import {PatientinfoModule} from './patientinfo/patientinfo.module';
import {ConsultationdataReportsModule} from './consultationdata-reports/consultationdata-reports.module';



@NgModule({
  declarations: [ConsultationComponent, ButtontopComponent, ConsultationformComponent, PatientlistComponent],
  imports: [
    CommonModule, MatFormFieldModule, MatCardModule, MatCheckboxModule, MatTooltipModule, FlexLayoutModule,
    MatInputModule, MatButtonModule, NgxMaterialTimepickerModule, FormsModule, ReactiveFormsModule,
    MatDialogModule, MatToolbarModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatPaginatorModule, MatSortModule, MatIconModule, MatTabsModule,
    MatSnackBarModule, MatRadioModule, MatDatepickerModule, MatListModule,
    MatNativeDateModule, MatSelectModule, MatTableModule, MatMenuModule, MatSidenavModule, PatientinfoModule, ConsultationdataReportsModule,
  ]
})
export class ConsultationModule { }
