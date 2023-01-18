import { TestBed } from '@angular/core/testing';

import { CeoInterceptor } from './ceo.interceptor';

describe('CeoInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CeoInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CeoInterceptor = TestBed.inject(CeoInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
