import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatTableDataSource, MatSnackBar, MatDialog} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';


// Data for datatable of Last Visit Info
export interface PeriodsElement {
  name: any;
  id: any;
  img: any;
}

const ELAMENTS_DATA: PeriodsElement[] = [
  {id: 1, name: 'MIRIAM QUANSAH p810730010', img: 'assets/images/logo/test2.jpg'},
  {id: 2, name: 'Mikeberg Afu Sitsofe p810730010', img: 'assets/images/logo/test3.jpg'},
  {id: 3, name: 'Alice Aheto p810730010', img: 'assets/images/logo/test1.jpg'},
  {id: 4, name: 'Ewoenam Aheto p810730010', img: 'assets/images/logo/test3.jpg'},
  {id: 5, name: 'Queen Atelu p810730010', img: 'assets/images/logo/test2.jpg'},

];

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {

  @Output()
  selected: EventEmitter<any>;


  consultsSource = new MatTableDataSource<PeriodsElement>(ELAMENTS_DATA);

  displaysColumn: string[] = [
    'name',

  ];

  constructor(public snackBar: MatSnackBar, public dialog: MatDialog, public sanitizer: DomSanitizer) {
    this.selected = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  startConsultation() {
    this.selected.emit();
  }
}


