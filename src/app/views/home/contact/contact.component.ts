import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmailService } from 'src/app/services/email/email.service.interface';
import {NavigationType } from "../../components/NavigationEnums"
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public navigationType!: NavigationType;
  
  constructor(private _route: ActivatedRoute, public _emailService: IEmailService) { }
  ngOnInit(): void {
    this._route.data
      .subscribe(routeData => this.navigationType = routeData['navigationType']);
  }
}
