import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesFormComponent } from './ques-form.component';

describe('QuesFormComponent', () => {
  let component: QuesFormComponent;
  let fixture: ComponentFixture<QuesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
