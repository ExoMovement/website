import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

import { RefundReturnPolicyComponent } from './refund-return-policy.component';

describe('RefundReturnPolicyComponent', () => {
  let component: RefundReturnPolicyComponent;
  let fixture: ComponentFixture<RefundReturnPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundReturnPolicyComponent, NavbarComponent, FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundReturnPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
