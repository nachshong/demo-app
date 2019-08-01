import { TestBed } from '@angular/core/testing';

import { UptimeService } from './uptime.service';

describe('UptimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UptimeService = TestBed.get(UptimeService);
    expect(service).toBeTruthy();
  });
});
