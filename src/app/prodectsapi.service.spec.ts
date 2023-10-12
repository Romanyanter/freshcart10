import { TestBed } from '@angular/core/testing';

import { ProdectsapiService } from './prodectsapi.service';

describe('ProdectsapiService', () => {
  let service: ProdectsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdectsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
