import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

import { OurProjectsComponent } from './our-projects.component';

describe('OurProjectsComponent', () => {
  let component: OurProjectsComponent;
  let fixture: ComponentFixture<OurProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurProjectsComponent, NavbarComponent, FooterComponent ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
