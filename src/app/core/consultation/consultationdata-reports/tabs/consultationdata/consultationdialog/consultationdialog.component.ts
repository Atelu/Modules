import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-consultationdialog',
  templateUrl: './consultationdialog.component.html',
  styleUrls: ['./consultationdialog.component.css']
})
export class ConsultationdialogComponent implements OnInit {

  consultsForm: FormGroup;
  loginClick = false;
  isButtonEnable = true;



  constructor(public dialogRef: MatDialogRef<ConsultationdialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.isButtonEnable = true;

    this.consultsForm = this.formBuilder.group({
      text: [''],
      // password: ['']
    });
    this.isButtonEnable = true;

  }
  onSubmit(): void {

  }

  onClearText(): void {
    this.consultsForm.reset();
    this.isButtonEnable = false;
  }

  onCancelClick(): void {
    this.dialogRef.close('Cancel');
  }
  onConfirmClick(): void {
    if (this.consultsForm.touched === true ) {
      alert ('No API to connect to');
    } else {

      alert ('Nothing to save');
    }
  }
}
