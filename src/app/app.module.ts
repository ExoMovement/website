import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './home/contact/contact.component';
import { ShopComponent } from './services/shop/shop.component';
import { PrivacyPolicyComponent } from './home/privacy-policy/privacy-policy.component';
import { RefundReturnPolicyComponent } from './home/refund-return-policy/refund-return-policy.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OurProjectsComponent } from './research/our-projects/our-projects.component';
import { ServiceProjectsComponent } from './services/service-projects/service-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    ShopComponent,
    PrivacyPolicyComponent,
    RefundReturnPolicyComponent,
    OurProjectsComponent,
    ServiceProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
