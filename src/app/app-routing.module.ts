import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './home/contact/contact.component';
import { PrivacyPolicyComponent } from './home/privacy-policy/privacy-policy.component';
import { RefundReturnPolicyComponent } from './home/refund-return-policy/refund-return-policy.component';
import { OurProjectsComponent } from './research/our-projects/our-projects.component';
import { ResearchComponent } from './research/research/research.component';
import { PrototypesComponent } from './services/prototypes/prototypes.component';
import { ServicesComponent } from './services/services/services.component';
import { ShopComponent } from './services/shop/shop.component';
import {NavigationType } from "./components/NavigationEnums";

const routes: Routes = [
  { path: "", redirectTo: '/Research', pathMatch: 'full' },

  { path: "Research", component: ResearchComponent, data: {navigationType: NavigationType.Research} },
  { path: "Research/Our-Projects", component: OurProjectsComponent, data: {navigationType: NavigationType.Research} },
  { path: "Research/Contact", component: ContactComponent, data: {navigationType: NavigationType.Research} },
  { path: "Research/Refund-Return-Policy", component: RefundReturnPolicyComponent, data: {navigationType: NavigationType.Research} },
  { path: "Research/Privacy-Policy", component: PrivacyPolicyComponent, data: {navigationType: NavigationType.Research} },
  
  { path: "Services", component: ServicesComponent, data: {navigationType: NavigationType.Services} },
  { path: "Services/Prototypes", component: PrototypesComponent, data: {navigationType: NavigationType.Services} },
  { path: "Services/Shop", component: ShopComponent, data: {navigationType: NavigationType.Services} },
  { path: "Services/Contact", component: ContactComponent, data: {navigationType: NavigationType.Services} },
  { path: "Services/Refund-Return-Policy", component: RefundReturnPolicyComponent, data: {navigationType: NavigationType.Services} },
  { path: "Services/Privacy-Policy", component: PrivacyPolicyComponent, data: {navigationType: NavigationType.Services} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
