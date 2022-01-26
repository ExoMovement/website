import { Component, OnInit } from '@angular/core';
import {NavBarType } from "../../components/navbar/NavBarEnums"

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  public get NavBarType(): typeof NavBarType {
    return NavBarType; 
  }
  constructor() { }

  ngOnInit(): void {
  }

}
