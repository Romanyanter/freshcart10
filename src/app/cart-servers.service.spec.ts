import { TestBed } from '@angular/core/testing';

import { CartServersService } from './cart-servers.service';

describe('CartServersService', () => {
  let service: CartServersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartServersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
