import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtontopComponent } from './buttontop.component';

describe('ButtontopComponent', () => {
  let component: ButtontopComponent;
  let fixture: ComponentFixture<ButtontopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtontopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtontopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
