import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RefundReturnPolicyComponent } from './refund-return-policy/refund-return-policy.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "Home", component: HomeComponent },
  { path: "Contact", component: ContactComponent },
  { path: "Privacy-Policy", component: PrivacyPolicyComponent },
  { path: "Refund-Return-Policy", component: RefundReturnPolicyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
