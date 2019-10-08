import {Component, OnInit, ViewChild} from '@angular/core';
import {BannerComponent} from '../banner/banner.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {PatientlistComponent} from './components/patientlist/patientlist.component';
import {ConsultationformComponent} from './components/consultationform/consultationform.component';
import {ButtontopComponent} from './components/buttontop/buttontop.component';
import {ConsultationdataComponent} from './consultationdata-reports/tabs/consultationdata/consultationdata.component';
import {ConsultationdataReportsComponent} from './consultationdata-reports/consultationdata-reports.component';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
  @ViewChild(PatientlistComponent, {static: false}) Patientlist: PatientlistComponent;
  @ViewChild(ConsultationformComponent, {static: false}) ConsultationForm: ConsultationformComponent;
  @ViewChild(ButtontopComponent, {static: false}) Buttontop: ButtontopComponent;
  @ViewChild(ConsultationdataReportsComponent, {static: false}) Consultationdata: ConsultationdataReportsComponent;

  constructor() {
  }

  ngOnInit() {
  }
  onButtonCleared($event: any): void {
    this.ConsultationForm.addConsult();
    this.Consultationdata.consultDiag.consultationStart = false;
    this.Consultationdata.componentEvent.emit({selectedIndex: 1});
    this.Consultationdata.selectedIndex = this.Consultationdata.selectedIndex - 1;


  }

  onPatientSelected($event: any): void {
    console.log('patient selected', $event);
    this.ConsultationForm.setDefaultValue();
    this.Buttontop.isButtonEnable = false;
    this.Buttontop.consultationStart = true;
    this.Consultationdata.consultDiag.consultationStart = true;
    this.Consultationdata.componentEvent.emit({ selectedIndex: 1 });
    this.Consultationdata.selectedIndex = this.Consultationdata.selectedIndex + 1;
  }
  onButtonSelected($event: any): void {
    this.ConsultationForm.clearForm();
    this.Buttontop.isButtonEnable = true;
    this.Buttontop.consultationStart = false;
    this.Consultationdata.consultDiag.consultationStart = false;
    this.Consultationdata.componentEvent.emit({selectedIndex: 1});
    this.Consultationdata.selectedIndex = this.Consultationdata.selectedIndex - 1;

  }
  // onConsultationData($event: any): void {
  // }
}

