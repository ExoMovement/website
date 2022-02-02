import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavBarType } from 'src/app/components/navbar/NavBarEnums';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  public navigationType!: NavBarType;
  constructor(private _route: ActivatedRoute) { }
  ngOnInit(): void {
    this._route.data
      .subscribe(routeData => this.navigationType = routeData['navigationType']);
  }
}
