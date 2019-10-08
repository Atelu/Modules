import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ButtontopComponent} from '../components/buttontop/buttontop.component';
import {ConsultationdialogComponent} from './tabs/consultationdata/consultationdialog/consultationdialog.component';
import {ConsultationdataComponent} from './tabs/consultationdata/consultationdata.component';

@Component({
  selector: 'app-consultationdata-reports',
  templateUrl: './consultationdata-reports.component.html',
  styleUrls: ['./consultationdata-reports.component.css']
})
export class ConsultationdataReportsComponent implements OnInit {
  selectedIndex = 0;

  @ViewChild(ConsultationdataComponent, {static: false}) consultDiag: ConsultationdataComponent;
  @Output()
  selectedDataAndReports: EventEmitter<any>;
  @Output()
  componentEvent: EventEmitter<any>;
  constructor() {
    this.selectedDataAndReports = new EventEmitter<any>();
    this.componentEvent = new EventEmitter<any>();

  }

  ngOnInit() {
  }

  onConsultData($event: any): void {
    this.consultDiag.openComplaintDialog();
  }

}
