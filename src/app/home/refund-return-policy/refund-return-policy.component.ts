import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NavBarType } from "../../components/navbar/NavBarEnums"

@Component({
  selector: 'app-refund-return-policy',
  templateUrl: './refund-return-policy.component.html',
  styleUrls: ['./refund-return-policy.component.css']
})
export class RefundReturnPolicyComponent implements OnInit {
  public navigationType!: NavBarType;
  constructor(private _route: ActivatedRoute) { }
  ngOnInit(): void {
    this._route.data
      .subscribe(routeData => this.navigationType = routeData['navigationType']);
  }
}
