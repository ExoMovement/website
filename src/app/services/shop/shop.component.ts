import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NavigationType } from "../../components/NavigationEnums"

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  public navigationType!: NavigationType;
  constructor(private _route: ActivatedRoute) { }
  ngOnInit(): void {
    this._route.data
      .subscribe(routeData => this.navigationType = routeData['navigationType']);
  }
}
