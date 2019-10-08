import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationdataComponent } from './consultationdata.component';

describe('ConsultationdataComponent', () => {
  let component: ConsultationdataComponent;
  let fixture: ComponentFixture<ConsultationdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
