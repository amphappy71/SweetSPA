import { TestBed, inject } from '@angular/core/testing';

import { SweetToolsService } from './sweet-tools.service';

describe('SweetToolsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SweetToolsService]
    });
  });

  it('should be created', inject([SweetToolsService], (service: SweetToolsService) => {
    expect(service).toBeTruthy();
  }));
});
