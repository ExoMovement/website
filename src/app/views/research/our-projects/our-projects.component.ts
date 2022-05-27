import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NavigationType } from "../../components/NavigationEnums"

@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.scss']
})
export class OurProjectsComponent implements OnInit {
  public navigationType!: NavigationType;
  constructor(private _route: ActivatedRoute) { }
  ngOnInit(): void {
    this._route.data
      .subscribe(routeData => this.navigationType = routeData['navigationType']);
  }
}
