import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatSnackBar, MatTableDataSource} from '@angular/material';
import {ButtontopComponent} from '../buttontop/buttontop.component';

// Data for datatable of vital signs
export interface PeriodicElement {
  description: string;
  measuredValue: number;
  remarks: string;
  date: any;

}

export interface Review {
  value: string;
  viewValue: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {description: 'Temperature', measuredValue: 37, remarks: 'Normal', date: 'Dec 10, 2018'},
  {description: 'Weight', measuredValue: 55, remarks: 'ok', date: 'Dec 10, 2018'},
  {description: 'BMI', measuredValue: 16, remarks: 'Normal', date: 'Dec 10, 2018'},
  {description: 'Height', measuredValue: 5.85, remarks: '', date: 'Oct 10, 2018'},

];

@Component({
  selector: 'app-consultationform',
  templateUrl: './consultationform.component.html',
  styleUrls: ['./consultationform.component.css']
})
export class ConsultationformComponent implements OnInit {
  consultationForm: FormGroup;
  imgtop: any = 'assets/images/logo/profile.jpg';
  consultationStart = false;
  isButtonEnable = true;
  statusMessage: string;
  selectedIndex = 0;


  @Output() componentEvent = new EventEmitter<any>();
  @Output() consultationFormEvent = new EventEmitter<any>();
  @Input() buttonEvent: ButtontopComponent;


  disableSelect = new FormControl(false);
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2019, 8, 25);


  minDates = new Date(2019, 0, 1);
  maxDates = new Date(2020, 8, 25);

  consultationSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  displayedColumns: string[] = [
    'name',
    'Measured Value',
    'Remarks',
    'Date',
  ];

  doctors = [
    {id: 1, name: 'Dr. Isaac Arthur'},
    {id: 2, name: 'Dr. Josephine'},
  ];
  names = [  // img: any = 'assets/images/logo/test3.jpg';

    {id: 1, name: 'Mikeberg Afu Sitsofe', img: 'assets/images/logo/test3.jpg'},
    {id: 2, name: 'MIRIAM QUANSAH', img: 'assets/images/logo/test2.jpg'},
    {id: 3, name: 'Alice Aheto', img: 'assets/images/logo/test1.jpg'}
  ];

  review: Review[] = [
    {value: 'steak-3', viewValue: 'Yes'},
    {value: 'steak-4', viewValue: 'No'},
  ];

  constructor(public snackBar: MatSnackBar, public dialog: MatDialog) {
  }

  applyFilter(filterValue) {
    this.consultationSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.consultationForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      age: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      gender: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      height: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      weight: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      bmi: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      bp: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      doctorid: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      bed: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      reviewid: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      consultationroom: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      consultationdate: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      reviewdate: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      reviewtime: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      generalremarks: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      doctor: new FormControl(this.doctors[1].name),
      selectedRev: new FormControl('', [Validators.required, Validators.maxLength(10)]),

      vitalsignsid: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    });

  }

  submitForm(): void {
    if (this.consultationForm.invalid) {
      return;
    }
  }
  clearConsult(): void {
    this.consultationForm.reset();
    this.imgtop = 'assets/images/logo/profile.jpg';
    this.consultationStart = false;
  }
  addConsult() {
    this.clearConsult();
  }
  clearForm() {
    this.consultationForm.reset();
    this.imgtop = 'assets/images/logo/profile.jpg';
    // alert ('Consultation Ended');
    this.openSnackBar(this.statusMessage, 'Consultation Ended Successfully');
  }

  setDefaultValue() {
    this.consultationForm.patchValue({
      name: this.names[1].name, gender: 'male', age: '25', height: '4.5m',
      weight: '7kg', bmi: '18.5', bp: '160/80', doctor: this.doctors[1].name, img: this.names[2].img
    });

    this.openSnackBar(this.statusMessage, 'Consultation has Started Successfully');

    if (this.imgtop != null) {
      this.imgtop = 'assets/images/logo/test1.jpg';
    } else {
      this.imgtop = 'assets/images/logo/profile.jpg';
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  serviceplaceheadsignatureChange(event): void {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event: any) => {
        this.imgtop = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
    this.imgtop = 'assets/images/logo/profile.jpg';


  }
}
