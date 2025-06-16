import { TestBed } from '@angular/core/testing';

import { CestaService } from './cesta.service';

describe('CestaService', () => {
  let service: CestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
