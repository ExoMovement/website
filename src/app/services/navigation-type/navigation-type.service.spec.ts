import { TestBed } from '@angular/core/testing';

import { NavigationTypeService } from './navigation-type.service';

describe('NavigationTypeExtractorService', () => {
  let service: NavigationTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
