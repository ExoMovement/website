import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './home/contact/contact.component';
import { HomeComponent } from './home/home/home.component';
import { PrivacyPolicyComponent } from './home/privacy-policy/privacy-policy.component';
import { RefundReturnPolicyComponent } from './home/refund-return-policy/refund-return-policy.component';
import { OurProjectsComponent } from './research/our-projects/our-projects.component';
import { ResearchComponent } from './research/research/research.component';
import { PrototypesComponent } from './services/prototypes/prototypes.component';
import { ServicesComponent } from './services/services/services.component';
import { ShopComponent } from './services/shop/shop.component';
import {NavBarType } from "./components/navbar/NavBarEnums";

const routes: Routes = [
  { path: "", component: HomeComponent, data: {navigationType: NavBarType.Home} },

  { path: "Research", component: ResearchComponent, data: {navigationType: NavBarType.Research} },
  { path: "Research/Our-Projects", component: OurProjectsComponent, data: {navigationType: NavBarType.Research} },
  { path: "Research/Contact", component: ContactComponent, data: {navigationType: NavBarType.Research} },
  { path: "Research/Refund-Return-Policy", component: RefundReturnPolicyComponent, data: {navigationType: NavBarType.Research} },
  { path: "Research/Privacy-Policy", component: PrivacyPolicyComponent, data: {navigationType: NavBarType.Research} },
  
  { path: "Services", component: ServicesComponent, data: {navigationType: NavBarType.Services} },
  { path: "Services/Prototypes", component: PrototypesComponent, data: {navigationType: NavBarType.Services} },
  { path: "Services/Shop", component: ShopComponent, data: {navigationType: NavBarType.Services} },
  { path: "Services/Contact", component: ContactComponent, data: {navigationType: NavBarType.Services} },
  { path: "Services/Refund-Return-Policy", component: RefundReturnPolicyComponent, data: {navigationType: NavBarType.Services} },
  { path: "Services/Privacy-Policy", component: PrivacyPolicyComponent, data: {navigationType: NavBarType.Services} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
