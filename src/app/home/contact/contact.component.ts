import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NavBarType } from "../../components/navbar/NavBarEnums"
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public navigationType!: NavBarType;
  constructor(private _route: ActivatedRoute) { }
  ngOnInit(): void {
    this._route.data
      .subscribe(routeData => this.navigationType = routeData['navigationType']);
  }
}
