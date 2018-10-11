import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesAddedViewComponent } from './ques-added-view.component';

describe('QuesAddedViewComponent', () => {
  let component: QuesAddedViewComponent;
  let fixture: ComponentFixture<QuesAddedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuesAddedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuesAddedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
