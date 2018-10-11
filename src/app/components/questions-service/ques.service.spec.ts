import { TestBed } from '@angular/core/testing';

import { QuesService } from './ques.service';

describe('QuesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuesService = TestBed.get(QuesService);
    expect(service).toBeTruthy();
  });
});
