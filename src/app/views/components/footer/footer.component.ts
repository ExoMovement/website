import { Component, Input, OnInit } from '@angular/core';
import { NavigationType } from '../NavigationEnums';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() type!: NavigationType;
  public get NavBarType(): typeof NavigationType {
    return NavigationType; 
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
