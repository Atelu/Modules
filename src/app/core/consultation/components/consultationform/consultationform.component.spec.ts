import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationformComponent } from './consultationform.component';

describe('ConsultationformComponent', () => {
  let component: ConsultationformComponent;
  let fixture: ComponentFixture<ConsultationformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
