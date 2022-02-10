import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IEmailService } from './email.service.interface';

@Injectable()
export class EmailService implements IEmailService {
  _emailName!: string;

  constructor() { 
    this._emailName = environment.email.username;
  }

  getEmailName(): string {
    return this._emailName;
  }
}
