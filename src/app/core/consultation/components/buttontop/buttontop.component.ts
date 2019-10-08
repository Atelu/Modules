import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-buttontop',
  templateUrl: './buttontop.component.html',
  styleUrls: ['./buttontop.component.css']
})
export class ButtontopComponent implements OnInit {
  @Output() buttonEvent = new EventEmitter<any>();
  @Output()
  buttonSelected: EventEmitter<any>;

  @Output()
  buttonCleared: EventEmitter<any>;
  isButtonEnable = true;
  consultationStart = false;

  constructor() {  this.buttonSelected = new EventEmitter<any>();
                   this.buttonCleared = new EventEmitter<any>(); }

  ngOnInit() {
  }


  addConsult() {
    this.buttonCleared.emit();
  }

  clearForm() {
    this.buttonSelected.emit();
  }
}
