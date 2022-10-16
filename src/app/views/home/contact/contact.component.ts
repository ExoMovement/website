import { Component, OnInit } from '@angular/core';
import { IEmailService } from 'src/app/services/email/email.service.interface';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(public _emailService: IEmailService) { }
  ngOnInit(): void {
  }
}
