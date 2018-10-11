import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesEntryFormComponent } from './ques-entry-form.component';

describe('QuesEntryFormComponent', () => {
  let component: QuesEntryFormComponent;
  let fixture: ComponentFixture<QuesEntryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuesEntryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuesEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
