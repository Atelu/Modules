import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-patientinfo',
  templateUrl: './patientinfo.component.html',
  styleUrls: ['./patientinfo.component.css']
})
export class PatientinfoComponent implements OnInit {
  @Output() componentEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
