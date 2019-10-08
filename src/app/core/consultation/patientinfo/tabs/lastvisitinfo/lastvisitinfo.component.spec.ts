import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastvisitinfoComponent } from './lastvisitinfo.component';

describe('LastvisitinfoComponent', () => {
  let component: LastvisitinfoComponent;
  let fixture: ComponentFixture<LastvisitinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastvisitinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastvisitinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
