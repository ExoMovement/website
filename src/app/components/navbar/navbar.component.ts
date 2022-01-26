import { Component, Input, OnInit } from '@angular/core';
import {NavBarType } from "./NavBarEnums"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() type: NavBarType = NavBarType.Home;
  public get NavBarType(): typeof NavBarType {
    return NavBarType; 
  }
  active = 1;

  constructor() { }

  ngOnInit(): void {
  }

}