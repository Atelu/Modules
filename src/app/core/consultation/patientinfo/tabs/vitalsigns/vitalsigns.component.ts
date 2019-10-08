import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

export interface Vital {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  description: string;
  measuredValue: number;
  remarks: string;
  date: any;

}
const ELEMENT_DATA: PeriodicElement[] = [
  { description: 'Temperature', measuredValue: 37, remarks: 'Normal', date: 'Dec 10, 2018' },
  { description: 'Weight', measuredValue: 55, remarks: 'ok', date: 'Dec 10, 2018' },
  { description: 'BMI', measuredValue: 16, remarks: 'Normal', date: 'Dec 10, 2018' },
  { description: 'Height', measuredValue: 5.85, remarks: '', date: 'Oct 10, 2018' },

];
@Component({
  selector: 'app-vitalsigns',
  templateUrl: './vitalsigns.component.html',
  styleUrls: ['./vitalsigns.component.css']
})
export class VitalsignsComponent implements OnInit {
  selectedValue: string;

  consultationSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


  displayedColumns: string[] = [
    'name',
    'Measured Value',
    'Remarks',
    'Date',
  ];

  vitalsigns: Vital[] = [
    { value: 'steak-5', viewValue: 'Eye Vital Signs' }
  ];
  constructor() { }

  @ViewChild('paginator1', {static: true}) paginator1: MatPaginator;

  ngOnInit() {
    this.consultationSource.paginator = this.paginator1;

  }

  applyFilter(filterValue) {
    this.consultationSource.filter = filterValue.trim().toLowerCase();
  }

}
