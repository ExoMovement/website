import { Component, OnInit } from '@angular/core';
import {NavBarType } from "../../components/navbar/NavBarEnums"

@Component({
  selector: 'app-refund-return-policy',
  templateUrl: './refund-return-policy.component.html',
  styleUrls: ['./refund-return-policy.component.css']
})
export class RefundReturnPolicyComponent implements OnInit {
  public get NavBarType(): typeof NavBarType {
    return NavBarType; 
  }
  constructor() { }

  ngOnInit(): void {
  }

}
