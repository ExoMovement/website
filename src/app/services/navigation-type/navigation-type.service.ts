import { Injectable } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { tap, map, Observable } from 'rxjs';
import { INavigationTypeService, NavigationType } from './navigation-type.service.interface';

@Injectable({
  providedIn: 'root'
})
export class NavigationTypeService implements INavigationTypeService {
  constructor() { }

  public getNavigationType(route: ActivatedRoute): Observable<NavigationType> {
    return route.data.pipe(
        map(routeData => routeData['navigationType']),
        tap(navType => console.log("Navigation type: ", navType))
      );
  }
}