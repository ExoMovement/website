import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NavBarType } from "../../components/navbar/NavBarEnums"

@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.css']
})
export class OurProjectsComponent implements OnInit {
  public navigationType!: NavBarType;
  constructor(private _route: ActivatedRoute) { }
  ngOnInit(): void {
    this._route.data
      .subscribe(routeData => this.navigationType = routeData['navigationType']);
  }
}
