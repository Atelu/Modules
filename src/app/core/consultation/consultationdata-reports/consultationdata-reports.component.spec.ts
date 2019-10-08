import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationdataReportsComponent } from './consultationdata-reports.component';

describe('ConsultationdataReportsComponent', () => {
  let component: ConsultationdataReportsComponent;
  let fixture: ComponentFixture<ConsultationdataReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationdataReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationdataReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
