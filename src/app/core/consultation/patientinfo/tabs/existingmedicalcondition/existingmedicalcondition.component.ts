import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

export interface PeriodElements {
  description: string;
  remarks: any;

}
const ELAMENT_DATA: PeriodElements[] = [
  { description: 'Drug allergies', remarks: 'Chloroquine, Paracetamol' },
  { description: 'Food allergies', remarks: 'Garlic, Corn, Milk' },
  { description: 'Contact dermatitis', remarks: 'Nickel, Cobalt, Chromium salts' },


];
@Component({
  selector: 'app-existingmedicalcondition',
  templateUrl: './existingmedicalcondition.component.html',
  styleUrls: ['./existingmedicalcondition.component.css']
})
export class ExistingmedicalconditionComponent implements OnInit {

  @ViewChild('paginator4', { static: true}) paginator4: MatPaginator;

  consultSource = new MatTableDataSource<PeriodElements>(ELAMENT_DATA);

  displayColumns: string[] = [
    'description',
    'remarks',
  ];
  constructor() { }

  ngOnInit() {
    this.consultSource.paginator = this.paginator4;

  }

  applyFilters(filterValues) {
    this.consultSource.filter = filterValues.trim().toLowerCase();
  }
}
