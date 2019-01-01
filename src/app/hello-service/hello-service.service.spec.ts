import { TestBed } from '@angular/core/testing';

import { HelloServiceService } from './hello-service.service';

describe('HelloServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelloServiceService = TestBed.get(HelloServiceService);
    expect(service).toBeTruthy();
  });
});
