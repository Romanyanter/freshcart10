import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authontactionGuard } from './authontaction.guard';

describe('authontactionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authontactionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
