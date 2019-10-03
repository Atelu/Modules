import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttontop',
  templateUrl: './buttontop.component.html',
  styleUrls: ['./buttontop.component.css']
})
export class ButtontopComponent implements OnInit {
  isButtonEnable = true;

  constructor() { }

  ngOnInit() {
  }
  addConsult() {}

  clearForm() {}
}
