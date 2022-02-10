import { TestBed } from '@angular/core/testing';

import { EmailService } from './email.service';
import { IEmailService } from './email.service.interface';

describe('EmailService', () => {
  let service: IEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: IEmailService, useClass: EmailService }]
    });
    service = TestBed.inject(IEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
