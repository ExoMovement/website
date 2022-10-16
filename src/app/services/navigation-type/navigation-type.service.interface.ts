import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

export abstract class INavigationTypeService {
  public abstract getNavigationType(route: ActivatedRoute): Observable<NavigationType>;
}
export enum NavigationType {
  Research,
  Services    
}