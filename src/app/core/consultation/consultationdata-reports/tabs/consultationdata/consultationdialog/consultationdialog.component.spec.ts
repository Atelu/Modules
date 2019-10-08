import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationdialogComponent } from './consultationdialog.component';

describe('ConsultationdialogComponent', () => {
  let component: ConsultationdialogComponent;
  let fixture: ComponentFixture<ConsultationdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
