import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavBarType } from 'src/app/components/navbar/NavBarEnums';

@Component({
  selector: 'app-prototypes',
  templateUrl: './prototypes.component.html',
  styleUrls: ['./prototypes.component.css']
})
export class PrototypesComponent implements OnInit {
  public navigationType!: NavBarType;
  constructor(private _route: ActivatedRoute) { }
  ngOnInit(): void {
    this._route.data
      .subscribe(routeData => this.navigationType = routeData['navigationType']);
  }
}
