import { TestBed, inject } from '@angular/core/testing';

import { SweetDataService } from './sweet-data.service';

describe('SweetDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SweetDataService]
    });
  });

  it('should be created', inject([SweetDataService], (service: SweetDataService) => {
    expect(service).toBeTruthy();
  }));
});
