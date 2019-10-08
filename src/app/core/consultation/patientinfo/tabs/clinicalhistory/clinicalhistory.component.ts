import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

export interface PeriodicsElements {
  name: string;
  record: any;

}
const ELEMENTS_DATAS: PeriodicsElements[] = [
  { name: 'Chronics', record: 'Diabetes, Hypertension' },
  { name: 'Allergies', record: 'Sulphur, Chloroquine' },
  { name: 'Procedure	', record: 'Hernia' },
  { name: 'Procedure	', record: 'Sample' },

];
@Component({
  selector: 'app-clinicalhistory',
  templateUrl: './clinicalhistory.component.html',
  styleUrls: ['./clinicalhistory.component.css']
})
export class ClinicalhistoryComponent implements OnInit {

  @ViewChild('paginator3', { static: true }) paginator3: MatPaginator;

  consultationsSources = new MatTableDataSource<PeriodicsElements>(ELEMENTS_DATAS);

  displayColumn: string[] = [
    'name',
    'record',
  ];
  constructor() { }

  ngOnInit() {
    this.consultationsSources.paginator = this.paginator3;

  }
  applyFilters(filtersValues) {
    this.consultationsSources.filter = filtersValues.trim().toLowerCase();
  }
}
