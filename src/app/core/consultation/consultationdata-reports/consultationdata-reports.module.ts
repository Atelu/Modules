import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultationdataReportsComponent } from './consultationdata-reports.component';
import { ConsultationdataComponent } from './tabs/consultationdata/consultationdata.component';
import { ReportsandchartsComponent } from './tabs/reportsandcharts/reportsandcharts.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatFormFieldModule, MatCardModule,  MatCheckboxModule,  MatTooltipModule,
  MatInputModule, MatButtonModule,
  MatDialogModule, MatToolbarModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatPaginatorModule, MatSortModule, MatIconModule, MatTabsModule,
  MatSnackBarModule, MatRadioModule, MatDatepickerModule, MatListModule,
  MatNativeDateModule, MatSelectModule, MatTableModule, MatMenuModule, MatSidenavModule
} from '@angular/material/';
import { ConsultationdialogComponent } from './tabs/consultationdata/consultationdialog/consultationdialog.component';
import { DiagnosisComponent } from './tabs/consultationdata/diagnosis/diagnosis.component';

@NgModule({
  declarations: [ConsultationdataReportsComponent, ConsultationdataComponent, ReportsandchartsComponent, ConsultationdialogComponent, DiagnosisComponent],
  exports: [
    ConsultationdataReportsComponent
  ],
  imports: [
    CommonModule, FlexLayoutModule,
    MatFormFieldModule, MatCardModule,  MatCheckboxModule,  MatTooltipModule,
    MatInputModule, MatButtonModule,  FormsModule, ReactiveFormsModule,
    MatDialogModule, MatToolbarModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatPaginatorModule, MatSortModule, MatIconModule, MatTabsModule,
    MatSnackBarModule, MatRadioModule, MatDatepickerModule, MatListModule,
    MatNativeDateModule, MatSelectModule, MatTableModule, MatMenuModule, MatSidenavModule,
  ]
})
export class ConsultationdataReportsModule { }
