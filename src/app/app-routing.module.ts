import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './home/contact/contact.component';
import { HomeComponent } from './home/home/home.component';
import { PrivacyPolicyComponent } from './home/privacy-policy/privacy-policy.component';
import { RefundReturnPolicyComponent } from './home/refund-return-policy/refund-return-policy.component';
import { ShopComponent } from './services/shop/shop.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "Home", component: HomeComponent },
  { path: "Contact", component: ContactComponent },
  { path: "Privacy-Policy", component: PrivacyPolicyComponent },
  { path: "Refund-Return-Policy", component: RefundReturnPolicyComponent },
  { path: "Shop", component: ShopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
