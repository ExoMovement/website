import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NavigationType } from "../../components/NavigationEnums"

@Component({
  selector: 'app-refund-return-policy',
  templateUrl: './refund-return-policy.component.html',
  styleUrls: ['./refund-return-policy.component.scss']
})
export class RefundReturnPolicyComponent implements OnInit {
  public navigationType!: NavigationType;
  constructor(private _route: ActivatedRoute) { }
  ngOnInit(): void {
    this._route.data
      .subscribe(routeData => this.navigationType = routeData['navigationType']);
  }
}
