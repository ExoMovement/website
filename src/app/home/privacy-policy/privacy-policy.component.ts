import { Component, OnInit } from '@angular/core';
import {NavBarType } from "../../components/navbar/NavBarEnums"

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {
  public get NavBarType(): typeof NavBarType {
    return NavBarType; 
  }
  constructor() { }

  ngOnInit(): void {
  }

}
