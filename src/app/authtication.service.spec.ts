import { TestBed } from '@angular/core/testing';

import { AuthticationService } from './authtication.service';

describe('AuthticationService', () => {
  let service: AuthticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
