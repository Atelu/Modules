import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ConsultationdialogComponent} from './consultationdialog/consultationdialog.component';

@Component({
  selector: 'app-consultationdata',
  templateUrl: './consultationdata.component.html',
  styleUrls: ['./consultationdata.component.css']
})
export class ConsultationdataComponent implements OnInit {
  consultationStart = false;

  @Output()
  selectedData: EventEmitter<any>;

  constructor(public dialog: MatDialog) {
    this.selectedData = new EventEmitter<any>();
  }

  ngOnInit() {
  }
openDialog(): void {
  this.selectedData.emit();

}
  // adding Complaints/Clinical Notes
  openComplaintDialog(): void {

 if (this.consultationStart === true) {

 const dialogRef = this.dialog.open(ConsultationdialogComponent, {
        width: '700px',
      });


 dialogRef.afterClosed().subscribe(result => {

        if (result === 'Confirm') {

          console.log('The dialog was closed');
        } else {
          if (result === 'Cancel') {
            this.dialog.closeAll();
          }
        }
      });
    } else {
      alert('start Consultation');
    }
  }

}

