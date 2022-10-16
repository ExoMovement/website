import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INavigationTypeService, NavigationType } from 'src/app/services/navigation-type/navigation-type.service.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  type!: NavigationType;
  public NavBarType: typeof NavigationType = NavigationType;

  constructor(private _route: ActivatedRoute, private _navigation: INavigationTypeService) { }
  ngOnInit(): void {
    this._navigation.getNavigationType(this._route).subscribe(navigationType => this.type = navigationType);
  }
}
