import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingmedicalconditionComponent } from './existingmedicalcondition.component';

describe('ExistingmedicalconditionComponent', () => {
  let component: ExistingmedicalconditionComponent;
  let fixture: ComponentFixture<ExistingmedicalconditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingmedicalconditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingmedicalconditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
