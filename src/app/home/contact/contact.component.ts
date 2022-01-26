import { Component, OnInit } from '@angular/core';
import {NavBarType } from "../../components/navbar/NavBarEnums"
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public get NavBarType(): typeof NavBarType {
    return NavBarType; 
  }
  constructor() { }

  ngOnInit(): void {
  }

}
