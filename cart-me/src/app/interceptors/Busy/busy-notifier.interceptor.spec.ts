import { TestBed } from '@angular/core/testing';

import { BusyNotifierInterceptor } from './busy-notifier.interceptor';

describe('BusyNotifierInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BusyNotifierInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BusyNotifierInterceptor = TestBed.inject(BusyNotifierInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
