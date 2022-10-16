import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationType } from './services/navigation-type/navigation-type.service.interface';
import { NavbarComponent } from './views/components/navbar/navbar.component';
import { ContactComponent } from './views/home/contact/contact.component';
import { PrivacyPolicyComponent } from './views/home/privacy-policy/privacy-policy.component';
import { RefundReturnPolicyComponent } from './views/home/refund-return-policy/refund-return-policy.component';
import { OurProjectsComponent } from './views/research/our-projects/our-projects.component';
import { ResearchComponent } from './views/research/research/research.component';
import { PrototypesComponent } from './views/services/prototypes/prototypes.component';
import { ServicesComponent } from './views/services/services/services.component';
import { ShopComponent } from './views/services/shop/shop.component';

const routes: Routes = [
  { path: "", redirectTo: '/Research(navbar:Research)', pathMatch: 'full' },

  { path: "Research", component: ResearchComponent },
  { path: "Research/Our-Projects", component: OurProjectsComponent },
  
  { path: "Services", component: ServicesComponent },
  { path: "Services/Prototypes", component: PrototypesComponent },
  { path: "Services/Shop", component: ShopComponent},
  
  { path: "Contact", component: ContactComponent},
  { path: "Refund-Return-Policy", component: RefundReturnPolicyComponent },
  { path: "Privacy-Policy", component: PrivacyPolicyComponent },
  
  { path: "Research", component: NavbarComponent, data: {navigationType: NavigationType.Research}, outlet: "navbar"},
  { path: "Services", component: NavbarComponent, data: {navigationType: NavigationType.Services}, outlet: "navbar"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
