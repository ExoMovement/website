import { Component, Input, OnInit } from '@angular/core';
import {NavigationType } from "../NavigationEnums"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() type!: NavigationType;
  public get NavBarType(): typeof NavigationType {
    return NavigationType; 
  }

  constructor() { }

  ngOnInit(): void {
  }

}