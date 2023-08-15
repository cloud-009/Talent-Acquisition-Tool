import { TestBed } from '@angular/core/testing';

import { RequistiondataService } from './requistiondata.service';

describe('RequistiondataService', () => {
  let service: RequistiondataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequistiondataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
