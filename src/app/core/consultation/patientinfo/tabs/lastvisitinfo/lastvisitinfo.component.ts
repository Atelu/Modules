import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

export interface PeriodicElements {
  name: string;
  record: any;

}
const ELEMENT_DATAS: PeriodicElements[] = [
  { name: 'Doctors', record: 'Dr. Wisedom, Dr. Ahoi' },
  { name: 'Date', record: '2018-01-01 07:35 AM' },
  { name: 'Clinics', record: '	General, Eye' },
  { name: 'Diagnosis', record: 'Malaria, Cataract' },
  // {name: 'Prescriptions', record: 'Paracetamol, Artesunate'},

];
@Component({
  selector: 'app-lastvisitinfo',
  templateUrl: './lastvisitinfo.component.html',
  styleUrls: ['./lastvisitinfo.component.css']
})
export class LastvisitinfoComponent implements OnInit {



  consultationsSource = new MatTableDataSource<PeriodicElements>(ELEMENT_DATAS);
  displayedColumn: string[] = [
    'name',
    'record',
  ];
  constructor() { }
  @ViewChild('paginator2', { static: true }) paginator2: MatPaginator;

  ngOnInit() {
    this.consultationsSource.paginator = this.paginator2;

  }

  applyFilters(filtersValue) {
    this.consultationsSource.filter = filtersValue.trim().toLowerCase();
  }
}
