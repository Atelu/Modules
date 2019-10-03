import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConsultationComponent} from './consultation.component';
import {
  MatFormFieldModule, MatCardModule,  MatCheckboxModule,  MatTooltipModule,
  MatInputModule, MatButtonModule,
  MatDialogModule, MatToolbarModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatPaginatorModule, MatSortModule, MatIconModule, MatTabsModule,
  MatSnackBarModule, MatRadioModule, MatDatepickerModule, MatListModule,
  MatNativeDateModule, MatSelectModule, MatTableModule, MatMenuModule, MatSidenavModule
} from '@angular/material/';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtontopComponent } from './buttontop/buttontop.component';



@NgModule({
  declarations: [ConsultationComponent, ButtontopComponent],
  imports: [
    CommonModule, MatFormFieldModule, MatCardModule,  MatCheckboxModule,  MatTooltipModule, FlexLayoutModule,
    MatInputModule, MatButtonModule,
    MatDialogModule, MatToolbarModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatPaginatorModule, MatSortModule, MatIconModule, MatTabsModule,
    MatSnackBarModule, MatRadioModule, MatDatepickerModule, MatListModule,
    MatNativeDateModule, MatSelectModule, MatTableModule, MatMenuModule, MatSidenavModule
  ]
})
export class ConsultationModule { }
