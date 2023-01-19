import { TestBed } from '@angular/core/testing';

import { TimerInterceptor } from './timer.interceptor';

describe('TimerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TimerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TimerInterceptor = TestBed.inject(TimerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
