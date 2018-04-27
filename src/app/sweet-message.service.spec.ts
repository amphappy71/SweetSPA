import { TestBed, inject } from '@angular/core/testing';

import { SweetMessageService } from './sweet-message.service';

describe('SweetMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SweetMessageService]
    });
  });

  it('should be created', inject([SweetMessageService], (service: SweetMessageService) => {
    expect(service).toBeTruthy();
  }));
});
