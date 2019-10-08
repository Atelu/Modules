import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreComponent} from './core.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {BannerComponent} from './banner/banner.component';
import {CoreRoutingModule} from './core-routing.module';
import {RoutingExampleModule} from './routing-example/routing-example.module';
import {ComponentInteractionModule} from './component-interaction/component-interaction.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ConsultationModule} from './consultation/consultation.module';


import {
  MatFormFieldModule, MatCardModule, MatCheckboxModule, MatTooltipModule,
  MatInputModule, MatButtonModule,
  MatDialogModule, MatToolbarModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatPaginatorModule, MatSortModule, MatIconModule, MatTabsModule,
  MatSnackBarModule, MatRadioModule, MatDatepickerModule, MatListModule,
  MatNativeDateModule, MatSelectModule, MatTableModule, MatMenuModule, MatSidenavModule
} from '@angular/material/';
import {ConsultationdialogComponent} from './consultation/consultationdata-reports/tabs/consultationdata/consultationdialog/consultationdialog.component';


@NgModule({
  declarations: [CoreComponent, DashboardComponent, SidebarComponent, BannerComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    RoutingExampleModule, ConsultationModule,
    ComponentInteractionModule, MatFormFieldModule, MatCardModule, MatCheckboxModule, MatTooltipModule,
    MatInputModule, MatButtonModule, FlexLayoutModule,
    MatDialogModule, MatToolbarModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatPaginatorModule, MatSortModule, MatIconModule, MatTabsModule,
    MatSnackBarModule, MatRadioModule, MatDatepickerModule, MatListModule,
    MatNativeDateModule, MatSelectModule, MatTableModule, MatMenuModule, MatSidenavModule,
  ],
  entryComponents: [ConsultationdialogComponent],

  exports: [CoreComponent]
})
export class CoreModule {
}
