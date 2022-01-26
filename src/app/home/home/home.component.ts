import { Component, OnInit } from '@angular/core';
import {NavBarType } from "../../components/navbar/NavBarEnums"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public get NavBarType(): typeof NavBarType {
    return NavBarType; 
  }
  constructor() { }

  ngOnInit(): void {
  }

}
