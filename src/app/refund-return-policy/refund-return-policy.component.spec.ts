import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from '../navbar/navbar.component';

import { RefundReturnPolicyComponent } from './refund-return-policy.component';

describe('RefundReturnPolicyComponent', () => {
  let component: RefundReturnPolicyComponent;
  let fixture: ComponentFixture<RefundReturnPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundReturnPolicyComponent, NavbarComponent ]
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
